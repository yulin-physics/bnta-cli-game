const fs = require('fs');
const prompt = require('prompt-sync')();
const Step = require('./steps.js');
const InitStep = require("./initSteps.js")


messages = ["Are you ready for an adventure? (yes/no)"]
yesSteps = ["Choose your character!"]
noSteps = ["Okay, bye then!"]

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