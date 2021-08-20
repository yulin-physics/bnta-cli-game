const prompt = require('prompt-sync')();

let BlackJack = require('./blackjack.js');

let usersGame = new BlackJack();


function stickOrTwist(){
    // console.log("Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!");

    // console.log(`Your starting score is ${usersGame.getScore()}. Lets see what you got!`);

    let answer = prompt("Do you want to stick or twist? ");
        if(answer === 'twist'){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log("Sorry, you've lost. You will stay prisoner forever " + `Your final score is ${usersGame.getScore()}`);
            } else {
                console.log(`Your new score is ${usersGame.getScore()}`);
                //Prompt user to stick or twist again
                stickOrTwist();
            }
        } else {
            console.log(`Your final score is ${usersGame.getScore()}`);
            //Have dealer play game to try and beat score
            console.log('The villain will now try and beat your score!');

            let dealersGame = new BlackJack();
            console.log(`Villain's inital score is ${dealersGame.getScore()}`)
            while(dealersGame.getScore() < usersGame.getScore() && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(`Villain's new score is ${dealersGame.getScore()}`)
            }
            if(!dealersGame.isBust()){
                console.log("Sorry, the villain beat you :( Try again to let yourself free!");
            } else {
                console.log("Yaaay, you've won securing yourself max protection and freeedom from all evils!");
            }
        }
} 


//stickOrTwist();

module.exports = {stickOrTwist};