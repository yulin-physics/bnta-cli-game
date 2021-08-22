const Warrior = require("./warrior");

const prompt = require("prompt-sync")();

class ThirdChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifThirdChoice(user)
      
    }
ifThirdChoice(user){
    
    console.log('\nAfter walking the whole day you find a village....You are tired and would like to find a place where to rest for the night...')
        console.log('\nDo you go to the village to rest? (y/n)')
        let choice3=prompt('> ').toLowerCase()
        if (choice3=='yes'||choice3=='y'){
            console.log('\nYou enter the village and locate an inn, you pay for a room for the night and then order some food. ')   
            console.log('\nAnother traveller sees you and approaches you while holding some cards... ')
            console.log(`\n"Do you want to play a card game with me? I have been asking everyone in the inn tonight but no one wanted to play!" The traveller said`)
            console.log('\n Do you want to play? (yes/no)')
            let cardGame=prompt('>').toLowerCase()
            if (cardGame=='yes'||cardGame=='y'){
                //need to add CLASS MINI GAME
                console.log(`\n'Finally! Someone to play with!' He says!`);
                console.log('You have a lot of fun and make a new friend...');
                console.log(`\n'Thank you for playing with me! I have been feeling lonely lately! Actually... I want to thank you with a gift...`);
                console.log('\nYOU RECEIVED A SWORD!');
                user.addStrength();
                console.log(user.currentStrength())
            }else if(cardGame=='no'||cardGame=='n'){
                console.log(`\n"Oh well, hopefully I will find someone else to play with! have a good evening!" He says, while leaving your table.`)
            }else{
                console.log(`\n"There is no fun playing with a drunk person, I will let you be" He says. You see him leaving your table still wondering what you just said. `)
            }
            console.log('....You finally go to sleep....')
        
        }else if(choice3=='no'||choice3=='n'){
              console.log('\nSurprisingly you do not feel tired...You believe you are really close to your destination and prefer get there the fastest possible.') 
        
         }
    
    }
}

module.exports=ThirdChoice