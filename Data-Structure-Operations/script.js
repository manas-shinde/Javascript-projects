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
 * ///////////////////////////////////////////////////
 * Coding Challenge - 1
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
