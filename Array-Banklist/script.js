"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";

  movements.forEach((mov, i) => {
    let transactionType = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
      <div class="movements__value">${Math.abs(mov)}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const currentBalance = (movements) => {
  let balance = movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = (account) => {
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${income} €`;

  const outcome = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur);

  labelSumOut.textContent = `${Math.abs(outcome)} €`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * account.interestRate) / 100)
    .filter((int, i) => {
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.textContent = `${interest} €`;
};

const createUsername = (accounts) => {
  accounts.forEach((user) => {
    user.username = user.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsername(accounts);
console.log("Users : ", accounts);

// Event handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin == Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;
    // Clear the fields
    inputLoginPin.value = inputLoginUsername.value = "";

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    currentBalance(currentAccount.movements);

    // Display Summary
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// // Simple Array Methods
// let arr = ["a", "b", "c", "d", "e"];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(" - "));

// ///////////////////////////////////////
// // The new at Method
// const arr1 = [23, 11, 64];
// console.log(arr1[0]);
// console.log(arr1.at(0));

// // getting last array element
// console.log(arr1[arr.length - 1]);
// console.log(arr1.slice(-1)[0]);
// console.log(arr1.at(-1));

// console.log("jonas".at(0));
// console.log("jonas".at(-1));

// ///////////////////////////////////////
// // Looping Arrays: forEach

// console.clear();

// const movs = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(`Transaction ID \t| Type \t| Amount`);
// movs.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`\t ${i} \t Credited : ${Math.abs(mov)}`);
//   } else {
//     console.log(`\t ${i} \t Debited : ${Math.abs(mov)}`);
//   }
// });

// ///////////////////////////////////////
// // Looping Map: forEach

// currencies.forEach((value, key, map) => {
//   console.log(`${key} : ${value}`);
// });

// ///////////////////////////////////////
// // Looping set: forEach

// const tempSet = new Set(["USD", "EUR", "GBP"]);

// tempSet.forEach((value, set) => {
//   console.log(value);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = (dogsJulia, dogsKate) => {
  let newDogsJulia = [...dogsJulia];

  newDogsJulia.pop();
  newDogsJulia.shift();

  const dogs = newDogsJulia.concat(dogsKate);

  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// Map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.2;

const movemetsUsd = movements.map((mov) => mov * eurToUsd);

console.log(`Movements to USD : ${movemetsUsd}`);

// Filter Method

const depositeCash = movements.filter((amount) => amount > 0);

const windrawCash = movements.filter((amt) => amt < 0);

console.log(depositeCash);
console.log(windrawCash);

// Reduce Method

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

console.log("Current Balance : ", balance);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const JuliaDogs = [5, 2, 4, 1, 15, 8, 3];
const KateDogs = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogs) => {
  const humanAge = dogs.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(
    `🚀 | file: script.js:286 | calcAverageHumanAge | humanAge:`,
    humanAge
  );

  const adultDogs = humanAge.filter((age) => age >= 18);
  console.log(
    `🚀 | file: script.js:289 | calcAverageHumanAge | adultDogs:`,
    adultDogs
  );

  const avg = adultDogs.reduce((acc, cur) => acc + cur, 0) / adultDogs.length;
  console.log(`🚀 | file: script.js:298 | calcAverageHumanAge | avg:`, avg);
};

calcAverageHumanAge(JuliaDogs);
calcAverageHumanAge(KateDogs);
