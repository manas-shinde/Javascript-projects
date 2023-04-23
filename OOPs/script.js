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

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is just accelerate the speed!!`);
  console.log(
    `🚀 | file: script.js:46 |${this.make} is going at speed : ${this.speed} km/h`
  );
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} is just appled the breake!!`);
  console.log(
    `🚀 | file: script.js:46 |${this.make} is going at speed : ${this.speed} km/h`
  );
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  // 1. Classes are NOT hoisted
  // 2. Classes are first-class citizens
  // 3. Classes are executed in strict mode

  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  greet() {
    console.log(`Hey ${this._fullName}`);
  }
  // getters and setters
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`Given name ${name} is not a full name!!`);
  }
  // static method
  static hey() {
    console.log(`hey there!!`);
    console.log(this);
  }
}

const ms = new PersonCl('Manas Shinde', 2000);
ms.greet();

PersonCl.hey();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is just accelerate the speed!!`);
    console.log(
      `🚀 | file: script.js:46 |${this.make} is going at speed : ${this.speed} km/h`
    );
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is just appled the breake!!`);
    console.log(
      `🚀 | file: script.js:46 |${this.make} is going at speed : ${this.speed} km/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
