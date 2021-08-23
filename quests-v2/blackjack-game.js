const prompt = require('prompt-sync')();
const chalk = require('chalk');
let BlackJack = require('./blackjack.js');
let usersGame = new BlackJack();


 function stickOrTwist(){
    // console.log("Welcome to the villain's casino! Win a game of BlackJack to let your family and yourself free!");

    // console.log(`Your starting score is ${usersGame.getScore()}. Lets see what you got!`);
    console.log(chalk.blue.bold(`\nDo you want to STICK or TWIST? (s/t)`));
    let answer = prompt("> ");
        if(answer === 'twist' || answer === "t"){
            usersGame.twist(); 
            if(usersGame.isBust()){
                console.log(chalk.underline.magentaBright(`\nSorry, you've lost. You will stay prisoner forever ` + `Your final score is ${usersGame.getScore()}`));
            } else {
                console.log(chalk.underline.magentaBright(`\nYour new score is ${usersGame.getScore()}`));
                //Prompt user to stick or twist again
                this.stickOrTwist();
            }
        } else {
            console.log(chalk.underline.magentaBright(`\nYour final score is ${usersGame.getScore()}`));
            //Have dealer play game to try and beat score
            console.log('\nThe dealer will now try and beat your score!');

              //Press Enter to contiune.
              console.log(`\n                                                                                                             
              ██████████████████████████                                                        
                ██    ██  ██  ██    ██                                
                ██      ██  ██      ██                                
                ████      ██      ████                                
                  ████          ████                                  
                    ████  ██  ████                                    
                      ████  ████  
       Press ENTER to reveal the dealer's score!                                  
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
            console.log(chalk.underline.magentaBright(`\nDealer's inital score is ${dealersGame.getScore()}`))
            while(dealersGame.getScore() <= usersGame.getScore() && !dealersGame.isBust()){
                dealersGame.twist()
                console.log(chalk.underline.magentaBright(`\nDealer's new score is ${dealersGame.getScore()}`))
            }

            console.log(`\n 
            ██████████████████████████                                                        
              ██    ██  ██  ██    ██                                
              ██      ██  ██      ██                                
              ████      ██      ████                                
                ████          ████                                  
                  ████  ██  ████                                    
                    ████  ████  
            Press ENTER to reveal score!                                   
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
                console.log(chalk.red.bold(`\nAh ahhhh!! I knew I was lucky! You will win next time maybe...`));
            } else {
                console.log(chalk.green.bold(`\nWow! finally someone as good as me!!! You won against the king of BlackJack!!!`));
            }
        }

        //reset playersScore
        usersGame.playersScore = 0;
      }


module.exports = {stickOrTwist};