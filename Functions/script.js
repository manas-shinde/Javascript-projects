'use strict';

///////////  Default Parameter ///////////
const bookings = [];

const createNewBooking = function (
  flightNum,
  NumPassangers = 1,
  price = 199 * NumPassangers
) {
  // Old ES5
  //   NumPassangers = NumPassangers || 1;
  //   price = price || 199;

  let booking = {
    flightNo: flightNum,
    NumPassangers: NumPassangers,
    price,
  };

  console.table(booking);
  bookings.push(booking);
};

createNewBooking('LH123');
createNewBooking('LH123', 3);
createNewBooking('LH123', 4, 200);
createNewBooking('LH123', undefined, 500);

/////////// Higher Order Functions ///////////

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = str => {
  let [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order functions
const transformer = (str, fun) => {
  console.log(`Original String :${str}`);

  console.log(`After tranformation : ${fun(str)}`);

  console.log(`Transformation Function used : ${fun.name}`);
};

transformer('Javascript is good !', oneWord);
transformer('Java is better.', upperFirstWord);

/////////// Function returning function ///////////

const greet = greeting => name => console.log(`${greeting} ${name}`);

let greetHey = greet('Hey');
greetHey('Manas');

greet('Good Moring')('Programmer');
