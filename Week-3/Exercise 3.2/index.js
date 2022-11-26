//! ---------------call---------------
//* function reusing
const obj1 = {
  name: "joe",
};

const obj2 = {
  name: "geo",
};

function printName() {
  console.log(this.name);
}

printName.call(obj1);
printName.call(obj2);

//* passing arguments
function printNameAndPlace(place) {
  console.log(this.name + " from " + place);
}

printNameAndPlace.call(obj1, "mumbai");

printNameAndPlace.call(obj2, "delhi");

// ! ---------------apply---------------
// in apply we pass arguments in an array
function printNameAndCountry(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

printNameAndCountry.apply(obj1, ["mumbai", "india"]);

printNameAndCountry.apply(obj2, ["delhi", "india"]);

// ! ---------------bind---------------
// in bind new function is returned and we can call it any time
function printNameAndCountry(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const printObj1 = printNameAndCountry.bind(obj1, "kolkata", "india");

const printObj2 = printNameAndCountry.bind(obj2, "pune"); // adding a default argument

printObj1();
printObj2("india");
