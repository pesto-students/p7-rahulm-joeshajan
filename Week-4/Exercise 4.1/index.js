const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  constructor(callback) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];
    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
    this.updateResult(value, STATE.FULFILLED);
  };

  _reject = (error) => {
    this.updateResult(error, STATE.REJECTED);
  };

  updateResult(value, state) {
    // This is to make the processing async
    setTimeout(() => {
      // process the promise if it is still in pending state
      if (this.state !== STATE.PENDING) {
        return;
      }

      // check is value is also a promise
      if (value instanceof MyPromise) {
        return value.then(this._resolve, this._reject);
      }

      this.value = value;
      this.state = state;

      // execute handlers if already attached
      this.executeHandlers();
    }, 0);
  }

  addHandlers(handlers) {
    this.handlers.push(handlers);
    this.executeHandlers();
  }

  executeHandlers() {
    // Don't execute handlers if promise is not yet fulfilled or rejected
    if (this.state === STATE.PENDING) {
      return null;
    }

    this.handlers.forEach((handler) => {
      if (this.state === STATE.FULFILLED) {
        return handler.onSuccess(this.value);
      }
      return handler.onFail(this.value);
    });
    this.handlers = [];
  }

  then(onSuccess, onFail) {
    return new MyPromise((res, rej) => {
      this.addHandlers({
        onSuccess: function (value) {
          if (!onSuccess) {
            return res(value);
          }
          try {
            return res(onSuccess(value));
          } catch (err) {
            return rej(err);
          }
        },
        onFail: function (value) {
          if (!onFail) {
            return rej(value);
          }
          try {
            return res(onFail(value));
          } catch (err) {
            return rej(err);
          }
        },
      });
    });
  }

  catch(onFail) {
    return this.then(null, onFail);
  }
}

function getNumber() {
  return new MyPromise((resolve, reject) => {
    // get random number between 1 -100
    setTimeout(() => {
      const num = Math.floor(Math.random() * 100) + 1;

      if (num % 5 !== 0) {
        resolve(num);
      }
      if (num % 5 === 0) {
        reject(num);
      }
    }, 1000);
  });
}

getNumber()
  .then((value) => console.log("in then " + value))
  .catch((err) => console.log("in catch " + err));
