const Warrior = require("./warrior");
const Weapon=require("./weapon")
const ThirdChoice = require("./thirdChoice");
const prompt = require("prompt-sync")();

class FinalQuest{
    constructor(user){
        //this.user= new Warrior();
        this.sword=new Weapon();
        //this.thirdChoice= new ThirdChoice();
        this.finalQuest(user)
    }
    finalQuest(user){
        
        console.log(`YOU HAVE TOTAL OF ${user.currentStrength()} WEAPONS`)
        //console.log('The next day you immediately start walking again toward your goal.')
        console.log('\nAfter many hours... you FINALLY arrive at the cavern your master told you you could find the amulet in....you get closer...')
        console.log('You find the amulet....next to a sleeping giant monster....')
        if (user.currentStrength()==1){
            console.log('Thankfully the night before you received a magnificent sword!')
            console.log(`You cut the monster's throat and kill it! YOU GET THE AMULET! `)
            console.log('\n* A DAY LATER *')
            console.log('You did it!!! You managed to bring the amulet to you master, who is so happy that makes you rich!')
            console.log('THE END')

        }else{
            console.log('If only you had a proper weapon....The only way to get the amulet is to quietly approach the monster and steal it! ')
            if(Math.floor(Math.random()*100 + 1)>40){
                console.log('You might not be the best hero on the planet! But surely you are silent like a cat!')
                console.log('You steal the amulet without waking the monster up. NOW RUN BACK TO YOUR MASTER BEFORE THE MONSTER WAKES UP!')
                console.log('\n* A DAY LATER *')
                console.log('You did it!!! You managed to bring the amulet to you master, who is so happy that makes you rich!')
                console.log('THE END')
            }else{
                console.log('You try hard not to make a sound but then a bird starts singing, waking the monster up. The monster sees you and immediately attacks you!')
                user.youDie()
            }
        }    
    }
}
module.exports=FinalQuest;