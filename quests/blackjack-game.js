const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJack = require('./blackjack.js');
let usersGame = new BlackJack();

class StickOrTwist{
    constructor(){
        this.stickOrTwist()
    }
 stickOrTwist(){
    
    console.log(chalk.blue("Do you want to stick or twist? "));
    let answer = prompt(" > ");
        if(answer === 'twist'){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log(`\n Sorry, you BUSTED! ` + `Your final score is ${usersGame.getScore()}`);
            } else {
                console.log(`\n Your new score is ${usersGame.getScore()}`);
                //Prompt user to stick or twist again
                this.stickOrTwist();
            }
        } else {
            console.log(`\n Your final score is ${usersGame.getScore()}`);
            //Have dealer play game to try and beat score
            console.log('\n The dealer now will try to beat your score!');

            let dealersGame = new BlackJack();
            console.log(`\n Dealer's inital score is ${dealersGame.getScore()}`)
            while(dealersGame.getScore() < 17 && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(`\n Dealer's new score is ${dealersGame.getScore()}`)
            }
            if(!dealersGame.isBust()){
                console.log(`\n Ah ahhhh!! I knew I was lucky! You will win next time maybe...`);
            } else {
                console.log(`\n Wow! finally someone as good as me!!! You won against the king of BlackJack!!!`);
            }
        }
} 

}
//stickOrTwist();

module.exports = StickOrTwist;