const fs = require('fs');
const prompt = require('prompt-sync')();
const Step = require('./steps.js');
const InitStep = require("./initSteps.js")

let BlackJack = require('./blackjack.js');
let BlackJackGame = require('./blackjack-game.js')

// let usersGame = new BlackJack();
// console.log("Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!");

// console.log(`Your starting score is ${usersGame.getScore()}. Lets see what you got!`);

// BlackJackGame.stickOrTwist();

messages = ["Do you want to play? (yes/no)", "Enter name of your character."]
yesSteps = ["firstStep", "secondStep"]
noSteps = ["end1", "end2"]

function startGame() {
  //current step
  let currentStep = new Step(messages[0], yesSteps[0], noSteps[0]);

  let initStep = new InitStep(currentStep);
 
  initStep.logStep();
  initStep.handleAnswer();


   
 
 

}


startGame();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);