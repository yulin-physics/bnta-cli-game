
const prompt = require("prompt-sync")();
const Warrior=require('./warrior');
const Monster=require('./monster')


function startAdventure(){
//setting choice1 to be 0, so that i can overwrite it with a string later on      
let choice1=0;

    
let user=new Warrior();

    function saveName(){
        let takeName=prompt('What is your name? ')  
        
        user.assignName(takeName);
        console.log(`So, ${user.name}, you are telling me that your capricious master ordered you to find the legendary dark amulet...  `)
        console.log('Well, you will need first to go through this forest, but be careful, as you could encounter monsters...GOOD LUCK')
    }
    function firstChoice(){
        console.log('When you enter the forest you see some berries, and you are considering to take them....')
        console.log('Do you take them or not? (y/n)')
        let choice1=prompt('> ').toLowerCase()
        if (choice1=='yes'||choice1=='y'){
            if ((Math.random()*100+1)>20){
                console.log('That was a good choice!')
                user.addLife()
                console.log(`You now have ${user.currentLives()}`)
               
            }else{
                console.log('Oh no...those berries were poisonous! You feel sick....')
                user.removeLife()
                console.log(`You now have ${user.currentLives()}`)
            }
        }else{
            console.log('After inspection you convince yourself that those berries are poisonous... ')
            console.log('so you choose to keep going deeper in the forest...')
        }
    }

//to see if class warrior works
    // function trying(){
        
    //     let attacking=prompt('Want to attack monster? ')
    //     if (attacking=='yes'){
    //         user.attack()
    //     }else{console.log('What a coward!!!!')}
    //     user.currentStrength()
    //     user.addStrength(30)
    //     user.addStrength(30)
    //     user.currentStrength()
    // }
saveName();    
 //setTimeout(()=>{introduction()},10000) ;
firstChoice();
 //trying();
};





startAdventure()


