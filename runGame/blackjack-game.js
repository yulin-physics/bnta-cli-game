const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJack = require('./blackjack.js');
let usersGame = new BlackJack();


function stickOrTwist(){
    console.log(chalk.blue.bold("Do you want to STICK or TWIST? "));
    let answer = prompt(" > ");
        if(answer === 'twist'){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log(chalk.bgRed.bold(`\n Your final score is ${usersGame.getScore()}` + `\n Sorry, you've lost. You will stay prisoner forever!`));
            } else {
                console.log(chalk.underline.magentaBright(`\n Your new score is ${usersGame.getScore()}`));
                //Prompt user to stick or twist again
                stickOrTwist();
            }
        } else {
            console.log(chalk.magenta.bold.italic(`\n Your FINAL SCORE is ${usersGame.getScore()}`));
            //Have dealer play game to try and beat score
            console.log(chalk.bgRed.bold('\n The villain will now try and beat your score!'));

            //Press Enter to contiune.
        console.log(`\n Press ENTER to contiune`);

            let dealersGame = new BlackJack();
            console.log(chalk.bgWhite.bold.red(`\n Villain's inital score is ${dealersGame.getScore()}`));
            while(dealersGame.getScore() < usersGame.getScore() && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(chalk.bgBlack.red.bold(`\n Villain's new score is ${dealersGame.getScore()}`));
            } //Click enter to view who has won?!
            if(!dealersGame.isBust()){
                console.log(chalk.yellow(`\n SORRY, THE VILLAIN BEAT YOU :( TRY AGAIN TO LET YOURSELF FREE!`));
            } else {
                console.log(chalk.green.bold(`\n YAAYY, YOU'VE WON SECURING YOURSELF MAX PROTECTION AND FREEDOM FROM ALL EVILS!`));
            }
        }
} 


//stickOrTwist();

module.exports = {stickOrTwist};