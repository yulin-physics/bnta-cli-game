const Warrior = require("./warrior");

const prompt = require("prompt-sync")();
class FirstChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifFirstChoice(user)
    }
ifFirstChoice(user){
    console.log('When you enter the forest you see some berries, and you are considering to take them....')
        console.log('Do you take them or not? (y/n)')
        let choice1=prompt('> ').toLowerCase()
        if (choice1=='yes'||choice1=='y'){
            if ((Math.random()*100+1)>20){
                console.log('That was a good choice!')
                user.addLife()
                console.log(`You now have ${user.currentLives()} lives!`)
                //need to find pass equivalent or?
            }else{
                console.log('Oh no...those berries were poisonous! You feel sick....')
                user.removeLife()
                console.log(`You now have ${user.currentLives()} lives.`)
            }
        }else{
            console.log('After inspection you convince yourself that those berries are poisonous... ')
            console.log('so you choose to keep going deeper in the forest...')
        }
}
}
module.exports=FirstChoice