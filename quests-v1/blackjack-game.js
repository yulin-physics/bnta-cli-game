const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJack = require('./blackjack.js');
let usersGame = new BlackJack();

function blackjackIntro() {
  console.log(`\n loading... \n`);
        
  setTimeout( ()=>{console.log(chalk.redBright(`\n Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!`));}, 2000)  

  setTimeout( ()=>{console.log(chalk.redBright(`\n Beat the villain by getting a count as close to 21 as possible, without going over 21.`));}, 4000)  

  setTimeout( ()=>{ console.log(chalk.underline.magentaBright.bold(`\n Your starting score is ${usersGame.getScore()}. Let\'s see what you got! \n`));}, 6000)
 
}

function stickOrTwist(){

    console.log(chalk.blue.bold("Do you want to STICK or TWIST? (S/T)"));

    let answer = prompt(" > ");
        if(answer.toLowerCase() === 'twist' || answer.toLowerCase() === 't'){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log(chalk.bgRed.bold(`\nSorry, you BUSTED! ` + `Your final score is ${usersGame.getScore()}`));
            } else {
                console.log(chalk.underline.magentaBright(`\nYour new score is ${usersGame.getScore()}`));
                //Prompt user to stick or twist again
                stickOrTwist();
            }
        } else {
            console.log(chalk.magenta.bold.italic(`\nYour FINAL SCORE is ${usersGame.getScore()}`));
            //Have dealer play game to try and beat score
            console.log(chalk.bgRed.bold('\nThe dealer now will try to beat your score!'));

            //Press Enter to contiune.
            console.log(`\n                                                                                                             
            ██████████████████████████                                                        
              ██    ██  ██  ██    ██                                
              ██      ██  ██      ██                                
              ████      ██      ████                                
                ████          ████                                  
                  ████  ██  ████                                    
                    ████  ████  
     Press ENTER to reveal the villain's score!                                  
                    ████  ████                                      
                  ████      ████                                    
                ████    ██    ████                                  
                     ░░░░████               
              ██        ██        ██                             
              ██      ██  ██      ██                                
              ██    ██  ██  ██    ██                                
              ██  ██  ██  ██  ██  ██                                
            ██████████████████████████`);
            let gameContinue = prompt();

            let dealersGame = new BlackJack();
            console.log(chalk.bgWhite.bold.red(`\nDealer's inital score is ${dealersGame.getScore()}`));
            while(dealersGame.getScore() < 17 && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(chalk.bgWhite.red.bold(`\nDealer's new score is ${dealersGame.getScore()}`));
            } //Click enter to view who has won?!

            console.log(`\n 
            ██████████████████████████                                                        
              ██    ██  ██  ██    ██                                
              ██      ██  ██      ██                                
              ████      ██      ████                                
                ████          ████                                  
                  ████  ██  ████                                    
                    ████  ████  
        Press ENTER to reveal your fate!                                   
                    ████  ████                                      
                  ████      ████                                    
                ████    ██    ████                                  
                     ░░░░████               
              ██        ██        ██                             
              ██      ██  ██      ██                                
              ██    ██  ██  ██    ██                                
              ██  ██  ██  ██  ██  ██                                
            ██████████████████████████`);
            let finalScore = prompt();

            if(!dealersGame.isBust()){
                console.log(chalk.bgRed(`\nAh ahhhh!! I knew I was lucky! You will win next time maybe...`));
            } else {
                console.log(chalk.green.bold(`\nWow! finally someone as good as me!!! You won against the king of BlackJack!!!`));
            }

           
        }
} 


//stickOrTwist();

module.exports = {stickOrTwist, blackjackIntro};