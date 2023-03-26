'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

for (let day of days) {
  let openAt = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`Resturnt Open On ${day} ${openAt}`);
}

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
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log('🚀 ~ file: script.js:237 ~ scorers:', scorers);
