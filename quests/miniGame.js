const fs = require('fs');
const prompt = require('prompt-sync')();
const Step = require('./steps.js');
const InitStep = require("./initSteps.js")

class StartGame{
  constructor(){
    this.startGame();
    //this.message=message;
    
  }


startGame() {
  //current step
  let messages = ["So... want to start another round? (yes/no)"]
  //let yesSteps = ["Choose your character!"]
  let noSteps = ["Okay, bye then!"]

  let currentStep = new Step(messages[0], noSteps[0]);

  let initStep = new InitStep(currentStep);
 
  initStep.logStep();
  initStep.handleAnswer();

  //this.startGame();

}



// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);
}
module.exports=StartGame;