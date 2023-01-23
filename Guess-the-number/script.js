"use strict";

var secretNumber;
var score = 20;
var highscore;

//Generate the secret Number and reset the score to 20
let generateSecretNumber = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Current Secret Number is : ${secretNumber}`);
  score = 20;
};

//To retrive the highscore from local storage
let retriveHighScore = () => {
  generateSecretNumber();
  if (typeof Storage !== "undefined") {
    highscore = localStorage.getItem("highscore");
    document.querySelector(".highscore").textContent = highscore;
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
};

//To reset the highscore to local storage
let resetHighscore = () => {
  if (typeof Storage !== "undefined") {
    // Store
    highscore = 0;
    localStorage.setItem("highscore", highscore);
    document.querySelector(".highscore").textContent = highscore;
    score = 20;
    // alert
    alert(`HighScore is reset to zero !!`);
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
};
//To save the highscore to local storage
let saveHighScore = () => {
  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("highscore", highscore);
    // alert
    alert(`HighScore is saved !!`);
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
};

//Check the guess number
function checkTheNumber() {
  let guess = Number(document.querySelector(".guess").value);
  if (score !== 0) {
    //if guess is empty
    if (!guess) {
      document.querySelector(".message").textContent = "No number!";
      score--;
    } else if (guess == secretNumber) {
      //if the guess is correct.
      document.querySelector(".message").textContent = "Guess match";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        //save the highscore only if score is high that previous highscore
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess > secretNumber) {
      //if guess is high that secret Number
      document.querySelector(".message").textContent = "Too high";
      score--;
    } else if (guess < secretNumber) {
      //if guess is low than secret number
      document.querySelector(".message").textContent = "Too low";
      score--;
    }
    if (score === 0) {
      //if score
      document.querySelector("body").style.backgroundColor = "#f52020";
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
  document.querySelector(".score").textContent = score;
}

let restart = () => {
  generateSecretNumber();
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  console.clear();
  console.log(`Current Secret Number is : ${secretNumber}`);
};

retriveHighScore();
document.querySelector(".check").addEventListener("click", checkTheNumber);
document.querySelector(".again").addEventListener("click", restart);
document.querySelector(".reset").addEventListener("click", resetHighscore);
document.querySelector(".save").addEventListener("click", saveHighScore);
