
const prompt = require("prompt-sync")();
const Warrior=require("./warrior");
const FirstChoice=require("./firstChoice.js");
const SecondChoice = require("./secondChoice");
const ThirdChoice = require("./thirdChoice");
const FinalQuest=require("./finalQuest");
const Weapon = require("./weapon");




function startAdventure(){

    let user=new Warrior();
    let sword=new Weapon();

    function saveName(){
        console.log('\n')
        let takeName=prompt('What is your name? ')  
        
        user.assignName(takeName);
        console.log(`\nSo, ${user.name}, you are telling me that your capricious master ordered you to find the legendary dark amulet...  `)
        console.log('\nWell, you will need first to go through this forest, but be careful, as you could encounter monsters...GOOD LUCK')
    }
   
    saveName();    
// HERE THE USER IS ASKED THE FIRST CHOICE, TAKE BERRIES OR NOT, CONSEQUENCES: EITHER ADD/REMOVE A LIFE OR NOTHING
    let firstChoice= new FirstChoice(user);
// HERE SECOND CHOICE: HELP INJURED FOX OR NOT, IF YES, MONSTER, OTHERWISE CONTINUE    
    let secondChoice=new SecondChoice(user);
    //console.log('MOVE TO 3RD CHOICE')
// THIRD CHOICE: VILLAGE OR NOT? IF GO TO VILLAGE THEN can play MINIGAME OF CARDS, OTHERWISE CONTINUE. IF WIN CARD GAME YOU GET LIFE POINT OTHERWISE PASS.    
    let thirdChoice=new ThirdChoice(user);
    
// LAST QUEST: IF YOU GOT THE SWORD, YOU KILL THE BIG BOSS AND GET THE AMULET, OTHERWISE YOU NEED TO SNEAKLY STEAL IT...the end 
    let finalQuest=new FinalQuest(user);
    //finalQuest.finalQuest();
//END
};

    startAdventure()


module.exports={startAdventure}

