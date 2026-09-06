// in order to learn about JSON, you need to understand OBJECTS and ARRAYS

// first Object
let car = {
  make: "bmw",
  year: 2025,
  color: "red",
};

console.log(car.make);

// secondly, lets learn about ARRAYS
let coolCars = ["bmw", "toyota", "audi"];
console.log(coolCars[0]);

// lastly, you can combine them

let randomVariable = [{}, {}, {}];

// By adding the backtick, cars is not a string and JSON like
let cars = `[
  {
    "make": "bmw",
    "year": 2025,
    "color": "red"
  },
  {
    "make": "audi",
    "year": 2020,
    "color": "blue"
  }
]`;

// use JSON.parse to convert the JSON string back to Javascript
let carsConvertJS = JSON.parse(cars);
console.log(typeof carsConvertJS); // object

let carsConvertBackToJSON = JSON.stringify(carsConvertJS);
console.log(typeof carsConvertBackToJSON);

// console.log(cars[0].year);
console.log(typeof cars); // string
