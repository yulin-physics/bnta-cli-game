
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const fs = require('fs');
const Warrior=require("./warrior");
const FirstChoice=require("./firstChoice.js");
const SecondChoice = require("./secondChoice");
const ThirdChoice = require("./thirdChoice");
const FinalQuest=require("./finalQuest");
const SleepJS = require("./sleep.js")


let introText = fs.readFileSync('introduction.txt', 'utf8')
console.log(introText);
prompt(chalk.bgBlue(" Press ENTER to start the game!"));


function startAdventure(){
    let user=new Warrior();


    function saveName(){
        console.log('\nWhat is your name? ');
        let takeName=prompt(">");  
        
        user.assignName(takeName);

        SleepJS.sleep(1000);
        console.log(`\nSo, ${chalk.blue(user.name)}, you are telling me that your capricious master ordered you to find the legendary dark amulet...  `)

        SleepJS.sleep(2000);
       console.log('\nWell, you will need first to go through this forest, but be careful, as you could encounter monsters...GOOD LUCK')

       SleepJS.sleep(2000);
        
    }

    saveName();    
// HERE THE USER IS ASKED THE FIRST CHOICE, TAKE BERRIES OR NOT, CONSEQUENCES: EITHER ADD/REMOVE A LIFE OR NOTHING

        let firstChoice= new FirstChoice(user);
// HERE SECOND CHOICE: HELP INJURED FOX OR NOT, IF YES, MONSTER, OTHERWISE CONTINUE  
        let secondChoice=new SecondChoice(user);
        //console.log('MOVE TO 3RD CHOICE')
    // THIRD CHOICE: VILLAGE OR NOT? IF GO TO VILLAGE THEN can play MINIGAME OF CARDS, OTHERWISE CONTINUE. IF WIN CARD GAME YOU GET LIFE POINT OTHERWISE PASS.    
    if (!user.playOn){
        console.log(chalk.bgBlue('\nWant to play again? (y/n)'))
        let askPlayAgain=prompt('>').toLowerCase()
        if (askPlayAgain=='n'||askPlayAgain=='no'){
            console.log(chalk.bgBlue('Ok then! thank you for playing our adventure game!'))
            process.exit();}
        else{
            startAdventure();
        }
    }
        let thirdChoice=new ThirdChoice(user);
        
    // LAST QUEST: IF YOU GOT THE SWORD, YOU KILL THE BIG BOSS AND GET THE AMULET, OTHERWISE YOU NEED TO SNEAKLY STEAL IT, chance of death...the end 
        let finalQuest=new FinalQuest(user);
        //finalQuest.finalQuest();
    //END

    
}
let playOn=true;
while (playOn){
    startAdventure()
    console.log(chalk.bgBlue('\nWant to play again? (y/n)'))
    let askPlayAgain=prompt('>').toLowerCase()
    if (askPlayAgain=='n'||askPlayAgain=='no'){
        console.log(chalk.bgBlue('Ok then! thank you for playing our adventure game!'))
        playOn=false;
    }
}

module.exports={startAdventure}

