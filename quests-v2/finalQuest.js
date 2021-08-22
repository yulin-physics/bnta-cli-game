
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const SleepJS = require("./sleep.js");

class FinalQuest{
    constructor(user){
        this.finalQuest(user)
    }
    finalQuest(user){
        
        //console.log(`YOU HAVE TOTAL OF ${user.currentStrength()} WEAPONS`)
        //console.log('The next day you immediately start walking again toward your goal.')
        SleepJS.sleep(2000)
        console.log('\nAfter many hours... you FINALLY arrive at the cavern your master told you you could find the amulet in....you get closer...')
        SleepJS.sleep(2000)
        console.log('\nYou find the amulet....next to a sleeping giant monster....')
        SleepJS.sleep(2000)
        if (user.currentStrength()==1){
            console.log('\nThankfully the night before you received a magnificent sword!')
            SleepJS.sleep(2000)
            console.log(`\nYou cut the monster's throat and kill it! YOU GET THE AMULET! `)
            SleepJS.sleep(2000)
            console.log('\n* A DAY LATER *')
            SleepJS.sleep(2000)
            console.log('\nYou did it!!! You managed to bring the amulet to you master, who is so happy that makes you rich!')

        }else{

            console.log('\nIf only you had a proper weapon....The only way to get the amulet is to quietly approach the monster and steal it! ')
            SleepJS.sleep(2000)
            if(Math.floor(Math.random()*100 + 1)>40){
                console.log('\nYou might not be the best hero on the planet...But surely you are silent like a cat!')
                SleepJS.sleep(2000)
                console.log('\nYou steal the amulet without waking the monster up. NOW RUN BACK TO YOUR MASTER BEFORE THE MONSTER WAKES UP!')
                SleepJS.sleep(2000)
                console.log('\n* A DAY LATER *')
                SleepJS.sleep(2000)
                console.log('\nYou did it!!! You managed to bring the amulet to you master, who is so happy that makes you rich!')
              
            }else{
                console.log('\nYou try hard not to make a sound but then a bird starts singing, waking the monster up. The monster sees you and immediately attacks you!')
                SleepJS.sleep(2000)
                user.youDie()
                user.playOn = false
            }
        }  
        console.log(chalk.bgRed('\nTHE END'))  
    }
}
module.exports=FinalQuest;