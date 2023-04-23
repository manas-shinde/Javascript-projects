'use strict';

// Constructure function and new operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

let manas = new Person('manas', 2000);
console.log(`🚀 | file: script.js:10 | manas:`, manas);

let kumar = new Person('kumar', 1999);
console.log(`🚀 | file: script.js:14 | kumar:`, kumar);

// Prototypes
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

manas.calAge();
kumar.calAge();

console.log(manas.__proto__ === Person.prototype);
