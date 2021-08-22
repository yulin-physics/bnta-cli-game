const Warrior = require("./warrior");
const chalk = require("chalk");
const prompt = require("prompt-sync")();

class FirstChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifFirstChoice(user)
    }
ifFirstChoice(user){
    console.log('\nWhen you enter the forest you see some berries, and you are considering to take them....')
        console.log(chalk.blue.bold('\nDo you take them or not? (y/n)'))
        let choice1=prompt('> ').toLowerCase()
        if (choice1=='yes'||choice1=='y'){
            if ((Math.random()*100+1)>50){
                console.log('\nThat was a good choice!')
                user.addLife()
                //console.log(`You now have ${user.currentLives()} lives!`)
            }else{
                console.log('\nOh no...those berries were poisonous! You feel sick....')
                user.removeLife()
                //console.log(`You now have ${user.currentLives()} lives.`)
            }
        }else{
            console.log('\nAfter inspection you convince yourself that those berries are poisonous... ')
            console.log('\nso you choose to keep going deeper in the forest...')
        }
}
}
module.exports=FirstChoice