
const prompt = require("prompt-sync")();
const Warrior=require('./warrior');
const Monster=require('./monster')


function startAdventure(){
    let takeName=prompt('What is your name? ')    
    let user=new Warrior(takeName);
    let monster=new Monster();
    
    function introduction(){
        user.assignName(takeName);
        console.log(`Your name is set to: ${user.name}`)
    }

//to see if class warrior work
    function trying(){
        
        let attacking=prompt('Want to attack monster? ')
        if (attacking=='yes'){
            user.attack()
        }else{console.log('What a coward!!!!')}
        user.currentStrength()
        user.addStrength(30)
        user.addStrength(30)
        user.currentStrength()
    }
 setTimeout(()=>{introduction()},10000) ;
 trying();
};

// function handleAnswer(answer){
//     let user=new Warrior();
//     if (answer=='run'){
//         console.log('YOU COWARD!!!!')
//         readline.close()}
//     else if(answer=='attack'){
//         console.log(`You inflicted damage ${user.attack()} `)
//         readline.close()
//     }
// }




startAdventure()


