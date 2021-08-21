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
        
//NEED TO FIND A WAY TO MAKE IT LOOP...UNTIL THE USER SAYS HE WANTS TO RUN AWAY FROM FIGTH

        if (braveOrCoward=='fight'||braveOrCoward=='f'){
            console.log('\nYou bravely (or stupidly, we will see how you do) chose to fight the monster!')
            let fightIsStillGoing=true;
            while(fightIsStillGoing){
                    //  implement needed classes and methods for attacks!
                    
                    if (Math.floor(Math.random()*100 + 1)>50){
                        console.log('\n You attack first and throw a punch at it!')
                        let userAttack=user.attack()
                        let monsterTakesAttack=this.monster.takeDamage(userAttack)
                        console.log('\nYou have the chance to run away, Do you take it or do you keep fighting (fight/run)')
                        let stillWantToFightOrNot=prompt('>').toLowerCase()
                        if(stillWantToFightOrNot=='fight'|| stillWantToFightOrNot=='f'){
                            console.log('\nYou chose to keep fighting.')
                        }else{
                            console.log("The monster got distracted and you took the chance to run!")
                            return fightIsStillGoing=false
                        }
                    }else{
                        this.monster.monsterAttack(user)
                        console.log('\nYou have the chance to run away, Do you take it or do you keep fighting (fight/run)')
                        let stillWantToFightOrNot=prompt('>').toLowerCase()
                        if(stillWantToFightOrNot=='fight'|| stillWantToFightOrNot=='f'){
                            console.log('\nYou chose to keep fighting.')
                        }else{
                            console.log("The monster got distracted and you took the chance to run!")
                            return fightIsStillGoing=false
                        }
                    }
                }
            }


// Choose to run away, continue game
        if(braveOrCoward=='run'||braveOrCoward=='r'){
            console.log('\nWell, not everyone is born to be a hero.')
            console.log('Surely you must have other qualities...right?')
            console.log('Luckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
            console.log('You take a deep breath and then start planning the next move.')
// User stutter,continue game           
        }else{
            console.log('\nCOME ON! NO TIME TO STUTTER! RUUUUUUUUUUN!!!!')
            console.log('Luckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
            console.log('You take a deep breath and then start planning the next move.')
        }
    }
}
module.exports=UserVsMonster;