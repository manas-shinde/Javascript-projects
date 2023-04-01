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

/////////// Use of call and apply methods ///////////

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  bookFlight(flightNum, passangerName) {
    console.log(
      `${passangerName} booked the seat on ${this.airline} flight ${this.iatacode} ${flightNum}.`
    );
    this.bookings.push({
      flight: `${this.iatacode} ${flightNum}`,
      passangerName,
    });
  },
};

lufthansa.bookFlight(234, 'Manas Shinde');
console.log(lufthansa);

const enrowings = {
  airline: 'Enrowings',
  iatacode: 'EW',
  bookings: [],
};

const bookFlight = lufthansa.bookFlight;

bookFlight.call(enrowings, 123, 'John');
bookFlight.call(lufthansa, 456, 'Sarah');

console.log(enrowings);
console.log(lufthansa);

const swist = {
  airline: 'Swist',
  iatacode: 'SX',
  bookings: [],
};

// apply() is same as call method the only differnce is it require array of args
const args = [789, 'xyz'];
bookFlight.apply(swist, args);

console.log(swist);

bookFlight.call(enrowings, ...args);
