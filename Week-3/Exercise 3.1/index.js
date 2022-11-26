const addAllNumbers = (args) => {
  return args.reduce((pre, curr) => pre + curr, 0);
};

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(args));
    return cache.get(key);
  };
};

const memoizeAddAllNumbers = memoize(addAllNumbers);

const time = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 8, 7, 8, 9, 10));
time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 8, 7, 8, 9, 10));

time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 12, 7, 8, 9, 10));
time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 12, 7, 8, 9, 10));
time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 12, 7, 8, 9, 10));

time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 55, 7, 8, 9, 10));
time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 55, 7, 8, 9, 10));
time(() => memoizeAddAllNumbers(1, 2, 3, 4, 5, 55, 7, 8, 9, 10));
