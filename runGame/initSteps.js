const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJackGame = require('./blackjack-game.js');
let BlackJack = require('./blackjack.js')
class InitStep {
    constructor(step) {
        this.step = step;
        this.answer = null;
    }


    logStep() {
      console.log(chalk.red.bold(this.step.message()));
      let answer = prompt(" > ");
      this.answer = answer;
    }

    handleAnswer() {
    
        if (this.answer === "yes") {
          this.step = this.step.yes();
          console.log(this.step);
          this.answer = prompt(" > ");
          this.answer = this.answer.toLowerCase();
          
          switch (this.answer.toLowerCase()) {
            case "left":
              this.runBlackjack();
              break;
            case "l":
              this.runBlackjack();
              break;

            default :
            console.log("Bianca and Maria\'s warriorrrr");
            break;
          }

        } else {
          this.step = this.step.no();
        }
        
        return this.step;
      }

      runBlackjack() {
        let usersGame = new BlackJack();
        console.log(`\n loading... \n`);
        
        setTimeout( ()=>{console.log(`\n Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!`);}, 2000)  
  
        setTimeout( ()=>{ console.log(`\n Your starting score is ${usersGame.getScore()}. Let\'s see what you got! \n`);}, 4000)
       
  
        setTimeout(() => {BlackJackGame.stickOrTwist()}, 6000);
      }
  

}

module.exports = InitStep;