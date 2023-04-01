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
