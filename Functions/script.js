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

// Bind method
const bookEWFlights = bookFlight.bind(enrowings);
const bookSXFlights = bookFlight.bind(swist);
const bookLHFlights = bookFlight.bind(lufthansa);

bookEWFlights(11, 'manas');

const bookEW23 = bookFlight.bind(enrowings, 23);
bookEW23('martha');
bookEW23('Pablo');
console.log(enrowings);

// With Event Listener
lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(`Total plans are ${this.planes}`);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get the answer from user
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n  (Write option number)`
      )
    );

    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// IIFE
(function () {
  console.log('This will never run again');
});

(() => console.log('This will ALSO never run again'))();

// Closures

let f;

const g = function () {
  let a = 22;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const boardPassangers = function (n, wait) {
  let perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);

  console.log(`Will start boarding passenger in ${wait} seconds`);
};

boardPassangers(80, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
