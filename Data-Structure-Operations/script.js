'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIng, ...extraIng) {
    console.log(
      `We are making you Pizza with ${mainIng} as a main ingrediant and other extra ingredent are ${extraIng} `
    );
  },
};

/**SPREAD
 *Right hand side of =
 */
const arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];
console.log(arr1);

/**REST
 * Left side of =
 */
const [firstmeal, secondmeal, ...OtherDay] = [...restaurant.starterMenu];
console.log(firstmeal);
console.log(secondmeal);
console.log(OtherDay);

//Object REST
let { sat, ...weekDays } = { ...restaurant.openingHours };
console.log(weekDays);

//REST Function
restaurant.orderPizza('Panner', 'onions', 'mushrooms', 'chesse');

/**
 *
 * Coding Challenge - 1
 *
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [player1, player2] = game.players;

//2
const [gk, ...fieldPlayers] = [...player1];
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4
const player1final = [...player1, 'Thiago', 'coutioh', 'Persitic'];
console.log(player1final);

//5
const {
  odds: { team1, x, team2 },
} = game;
console.log(team1, x, team2);

//6
let printGoals = (...players) => {
  console.log(`Total ${players.length} goal scored!!`);
};

printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 Win the game !!');
team1 > team2 && console.log('Team 2 Win the game !!');

/**------------------------
 * For of loop for arrays
 */
console.log('--------- Looping over the array ---------');
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const [i, e] of menu.entries()) {
  console.log(i, e);
}

// console.clear();

/**Optional chaining */
console.log('--------- Optional Chaining ---------');
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (let day of days) {
//   let openAt = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`Resturnt Open On ${day} ${openAt}`);
// }

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// Sol - 1
for (let [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}

// Sol -2
let avg = 0;

let odds = Object.values(game.odds);

for (let odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(`Average is ${(avg /= odds.length)}`);

// Sol -3

for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

//BONUS

const sco̥rers = {};
for (const player of game.scored) {
  sco̥rers[player] ? sco̥rers[player]++ : (sco̥rers[player] = 1);
}
console.log('🚀 ~ file: script.js:237 ~ scorers:', sco̥rers);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log('🚀 ~ file: script.js:269 ~ events:', events);

// 2
if (gameEvents.has(64)) {
  gameEvents.delete(64);
}
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4
for (let [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

console.log('🚀 ~ file: script.js:292 ~ String operations:');
let username = 'mAnAs';
let usernameLower = username.toLowerCase();
let userCorrectName = usernameLower[0].toUpperCase() + usernameLower.slice(1);
console.log('🚀 ~ file: script.js:295 ~ userCorrectName:', userCorrectName);

console.clear();

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀 
*/
function convertToCamelCase(test_data) {
  let [first, second] = test_data.split('_');
  let result = first + second[0].toUpperCase() + second.slice(1).toLowerCase();
  return result;
}

console.log(convertToCamelCase('underscore_case'));
console.log(convertToCamelCase('first_name'));
console.log(convertToCamelCase('Some_Variable'));
console.log(convertToCamelCase('calculate_AGE'));
console.log(convertToCamelCase('delayed_departure'));

console.clear();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');

  type = type.replace(/_/, ' ').replace(/_/, ' ').trim();

  let result = `${type.startsWith('Delayed') ? '🔴' : ''}${type} from ${getCode(
    from
  )} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(30);

  console.log(result);
}
