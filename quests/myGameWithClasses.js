
const prompt = require("prompt-sync")();
const Warrior=require('./warrior');
const FirstChoice=require('./firstChoice.js');
const SecondChoice = require("./secondChoice");





function startAdventure(){
//setting choice1 to be 0, so that i can overwrite it with a string later on      
let choice1=0;
let choice2=0;
    
    let user=new Warrior();

    function saveName(){
        let takeName=prompt('What is your name? ')  
        
        user.assignName(takeName);
        console.log(`So, ${user.name}, you are telling me that your capricious master ordered you to find the legendary dark amulet...  `)
        console.log('Well, you will need first to go through this forest, but be careful, as you could encounter monsters...GOOD LUCK')
    }
       
    saveName();    
// HERE THE USER IS ASKED THE FIRST CHOICE, TAKE BERRIES OR NOT, CONSEQUENCES: EITHER ADD/REMOVE A LIFE OR NOTHING
    let choiceBerries= new FirstChoice(user);
    let secondChoice=new SecondChoice(user);
    
};

startAdventure()


