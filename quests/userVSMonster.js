const Warrior = require("./warrior");
const Monster=require("./monster")
const prompt = require("prompt-sync")();


class UserVsMonster{
    constructor(user){
        this.user= new Warrior();
        this.monster=new Monster();
        this.fightOrFly(user)
    }
    fightOrFly(user){
        console.log('\nOh boy! The monster looks strong! Shall you bravely try to fight it or cowardly run for your life? (fight/run)')
        let braveOrCoward=prompt('>').toLowerCase()
        if (braveOrCoward=='fight'){
            //  implement needed classes and methods for attacks!
            console.log('\nYou bravely (or stupidly, we will see how you do) chose to fight the monster!')
            if (Math.floor(Math.random()*100 + 1)>50){
                console.log('\n You try to throw a punch at it!')
                let userAttack=user.attack()
                let monsterTakesAttack=this.monster.takeDamage(userAttack)
            }else{
                this.monster.monsterAttack(user)
            }



        }else if(braveOrCoward=='run'){
            console.log('\nWell, not everyone is born to be a hero.')
            console.log('Surely you must have other qualities...right?')
            console.log('Luckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
            console.log('You take a deep breath and then start planning the next move.')
        }else{
            console.log('\nCOME ON! NO TIME TO STUTTER! RUUUUUUUUUUN!!!!')
            console.log('Luckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
            console.log('You take a deep breath and then start planning the next move.')
        }
    }
}
module.exports=UserVsMonster;