const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJack = require('./blackjack.js');
let usersGame = new BlackJack();


function stickOrTwist(){
    // console.log("Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!");

    // console.log(`Your starting score is ${usersGame.getScore()}. Lets see what you got!`);
    console.log(chalk.blue("Do you want to stick or twist? "));
    let answer = prompt(" > ");
        if(answer === 'twist'){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log(`\n Sorry, you've lost. You will stay prisoner forever ` + `Your final score is ${usersGame.getScore()}`);
            } else {
                console.log(`\n Your new score is ${usersGame.getScore()}`);
                //Prompt user to stick or twist again
                stickOrTwist();
            }
        } else {
            console.log(`\n Your final score is ${usersGame.getScore()}`);
            //Have dealer play game to try and beat score
            console.log('\n The villain will now try and beat your score!');

            let dealersGame = new BlackJack();
            console.log(`\n Villain's inital score is ${dealersGame.getScore()}`)
            while(dealersGame.getScore() < usersGame.getScore() && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(`\n Villain's new score is ${dealersGame.getScore()}`)
            }
            if(!dealersGame.isBust()){
                console.log(`\n Sorry, the villain beat you :( Try again to let yourself free!`);
            } else {
                console.log(`\n Yaaay, you've won securing yourself max protection and freeedom from all evils!`);
            }
        }
} 


//stickOrTwist();

module.exports = {stickOrTwist};