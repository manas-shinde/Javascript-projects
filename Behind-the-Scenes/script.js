'use strict';

/*
if create a variable with var then it createa property on window object
Variable Hosting
for var - if we call the variable before declaring it then we get the undefine value.
to overcome this error ES6 had two new variable types - 
1) let 2) const
let and const are block scope and if we use them before declaring it then it shows the RefernceError (beacuse these variables present in TDZ - temporary  Dead Zone)
*/
console.log(myFirstName);
// console.log(myAge);
// console.log(myLastName);

var myFirstName = 'manas';
let myLastName = 'shinde';
const age = 22;

/* Function Hosting */
//function can be called before declaring
console.log(addDel(3, 2));
//function assign to variable can not be used before declaring
// console.log(addExp(4, 5));
// console.log(addArraoe(10, 20));

function addDel(a, b) {
  return a + b;
}
const addExp = function (a, b) {
  return a + b;
};

let addArraoe = (a, b) => {
  return a + b;
};

//Example for hosting

if (!totalProduct) {
  //here undefine is taken as a falsy values
  deleteShoppingCart();
}

var totalProduct = 10;

function deleteShoppingCart() {
  console.log('Shopping cart is deleted!!.');
}

//the variable those are created with 'var' are assign as a windows object property.
console.log(totalProduct === window.totalProduct);

/** Use of 'this' keyword */

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2030 - birthYear);
  // console.log(this);
};

const calcAgeArraow = birthYear => {
  console.log(2030 - birthYear);
  // console.log(this);
};
//For regular function this will be undefine
calcAge(1991);
//But in arrow function case this will point to window object or parent
calcAgeArraow(2000);

const manas = {
  birthYear: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2017 - this.birthYear);
  },
};

manas.calcAge();

const mansi = {
  birthYear: 2007,
};

mansi.calcAge = manas.calcAge;
//Now if call the calcAge is present in mansi object , this will pointing to the mansi. this is dynamic keyword is associate to who calls it.
mansi.calcAge();
