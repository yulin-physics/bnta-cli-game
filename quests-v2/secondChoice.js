const prompt = require("prompt-sync")();
const chalk = require("chalk");
const Warrior = require("./warrior");
const UserVsMonster=require("./userVSMonster.js")

class SecondChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifSecondChoice(user)
    }
ifSecondChoice(user){
    console.log('\nAfter walking for a while, you see nearby an injured fox...poor baby!')
        console.log(chalk.blue.bold(`\nIs helping the poor fox worth your time? (y/n)`))
        let choice2=prompt('> ').toLowerCase()
        if (choice2=='yes'||choice2=='y'){
            // fox is a monster and attacks!!!
            console.log(`\nYou are so naive... that was a trap!!! The fox quickly transforms into a not so good looking monster!!!`)
        if(user.currentLives()>=0){let fight=new UserVsMonster(user)}else{console.log('\nYou are feeling so sick that cannot stop vomiting, the monster is disgusted and leaves you be.')}   
        // put class for encounter with monster
        
        
        }else if (choice2=='no'||choice2=='n'){
                console.log("\nDamn! aren't you just a psychopath? Oh well you do you...")
                console.log('Anyway, you keep walking and go deeper in the forest...')
            }else{
            console.log('What? you are not even capable to say yes or no... ')
            console.log('you should not attempt helping another creature: you would surely kill it!')
            console.log('I thus choose for you to keep going deeper in the forest...')
        }
}
}
module.exports=SecondChoice