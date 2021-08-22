
const prompt = require("prompt-sync")();
const Warrior=require('./warrior');
const FirstChoice=require('./firstChoice.js');
const SecondChoice = require("./secondChoice");





function startAdventure(){

    let user=new Warrior();

    function saveName(){
        console.log('\n')
        let takeName=prompt('What is your name? ')  
        
        user.assignName(takeName);
        console.log(`\nSo, ${user.name}, you are telling me that your capricious master ordered you to find and kill the legendary dark amulet...  `)
        console.log('\nWell, you will need first to go through this forest, but be careful, as you could encounter monsters...GOOD LUCK')
    }
       
    saveName();    
// HERE THE USER IS ASKED THE FIRST CHOICE, TAKE BERRIES OR NOT, CONSEQUENCES: EITHER ADD/REMOVE A LIFE OR NOTHING
    let choiceBerries= new FirstChoice(user);
// HERE SECOND CHOICE: HELP INJURED FOX OR NOT, IF YES, MONSTER, OTHERWISE CONTINUE    
    let secondChoice=new SecondChoice(user);
    console.log('YOU STILL ALIVE!')
};

startAdventure()

module.exports={startAdventure}

