const prompt = require('prompt-sync')();
const StickOrTwist = require('./blackjack-game.js');

class InitStep {
    constructor(step) {
        this.step = step;
        this.answer = 0;
        this.gameOn=new StickOrTwist();
    }


    logStep() {
      console.log(this.step.message());
      let answer = prompt(" > ");
      this.answer = answer;
    }

    handleAnswer() {
    
        if (this.answer === "yes") {
          //this.step = this.step.yes();

          // let usersGame = new BlackJack();
          // console.log(`\n Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!`);

          // console.log(`\n Your starting score is ${usersGame.getScore()}. Lets see what you got! \n`);

          this.gameOn.stickOrTwist();

        } else {
          //this.step = this.step.no();
        }
        
       // return this.step;
      }


}

module.exports = InitStep;