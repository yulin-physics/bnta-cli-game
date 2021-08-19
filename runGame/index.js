const fs = require('fs');
const prompt = require('prompt-sync')();
const Step = require('./steps.js');
const InitStep = require("./initSteps.js")

messages = ["Do you want to play? ", "Enter name of your character. "]
yesSteps = ["firstStep", "secondStep"]
noSteps = ["end1", "end2"]

function startGame() {
  //current step
  let currentStep = new Step(messages[0], yesSteps[0], noSteps[0]);

  let initStep = new InitStep(currentStep);
  for (let i = 1; i < messages.length; i++) {
    initStep.logStep();
    initStep.handleAnswer();
    currentStep = new Step(messages[i], yesSteps[i], noSteps[i]);
    initStep = new InitStep(currentStep);
  }
 

}


startGame();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);