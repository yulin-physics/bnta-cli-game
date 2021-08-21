const fs = require('fs');
const prompt = require('prompt-sync')();
const Step = require('./steps.js');
const InitStep = require("./initSteps.js")

let introText = fs.readFileSync('introduction.txt', 'utf8')

function startGame() {
  //current step
  console.log(introText);
  let currentStep = new Step();

  let initStep = new InitStep(currentStep);
 
  initStep.logStep();
  initStep.handleAnswer();

}


startGame();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);