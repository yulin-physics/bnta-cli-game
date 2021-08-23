const prompt = require("prompt-sync")();
const chalk = require("chalk"); 
const Warrior = require("./warrior");
const StartGame=require("./blackjack-game")
const SleepJS = require("./sleep.js")

class ThirdChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifThirdChoice(user)
    
    }
ifThirdChoice(user){
    
    console.log('\nAfter walking the whole day you find a village....You are tired and would like to find a place where to rest for the night...')
        console.log(chalk.blue.bold('\nDo you go to the village to rest? (y/n)'))
        let choice3=prompt('> ').toLowerCase()
        if (choice3=='yes'||choice3=='y'){
            console.log('\nYou enter the village and locate an inn, you pay for a room for the night and then order some food. ')   
            console.log('\nAnother traveller sees you and approaches you while holding some cards... ')
            console.log(`\n"Do you want to play a card game with me? I have been asking everyone in the inn tonight but no one wanted to play!" The traveller said`)
            console.log(chalk.blue.bold('\nDo you want to play? (y/n)'))
            let cardGame=prompt('>').toLowerCase()
            if (cardGame=='yes'||cardGame=='y'){
                
                console.log(`\n'Finally! Someone to play with!' He says!`);
                //CLASS MINI GAME
                console.log('\nDo you know how to play BlackJack? I will be the dealer!')
                console.log(chalk.magentaBright.underline('\nYou start first with a score of 0'))
                console.log('you will need to twist the first card, but after you can choose if to twist again or stay with the current score.')
                console.log('\nYour goal is to reach a score that is high enough to beat my score without busting after reaching a score larger than 21.')
                console.log('\nWhen you choose to stick, I will start twisting cards, until I either reach a score of 17 or I bust myself.')
                console.log('\nWins who does not bust and has the highest score! But enough talking, LET US PLAY!\n')

                prompt(chalk.bgBlue("Ready to start? (Press ENTER)"))
                StartGame.stickOrTwist();

                console.log(chalk.bgBlue( "So... want to start another round? (y/n)"))
                let answer = prompt(">")
                if (answer === "y" || answer === "yes"){
                    StartGame.stickOrTwist();
                }
                
                SleepJS.sleep(2000)
                console.log('\nYou had a lot of fun and made a new friend...');
                SleepJS.sleep(2000)
                console.log(`\n'Thank you for playing with me! I have been feeling lonely lately! Actually... I want to thank you with a gift...`);
                SleepJS.sleep(2000)
                console.log('\nYOU RECEIVED A SWORD!');
                user.addStrength();
                console.log(chalk.bold.yellow("+", user.currentStrength(), "sword(s)"))
            }else if(cardGame=='no'||cardGame=='n'){
                console.log(`\n"Oh well, hopefully I will find someone else to play with! have a good evening!" He says, while leaving your table.`)
            }else{
                console.log(`\n"There is no fun playing with a drunk person, I will let you be" He says. You see him leaving your table still wondering what you just said. `)
            }
            SleepJS.sleep(2000)
            console.log('\n....You finally go to sleep....')
        
        }else if(choice3=='no'||choice3=='n'){
            console.log('\nSurprisingly you do not feel tired...You believe you are really close to your destination and prefer get there the fastest possible.') 
        
        }
    
    }
}

module.exports=ThirdChoice