const Warrior = require("./warrior");
const Monster=require("./monster")
//const PlayAgain=require("./wannaplayagain")
const prompt = require("prompt-sync")();


class UserVsMonster{
    constructor(user){
        this.user= new Warrior();
        this.monster=new Monster();
        //this.gameon=new PlayAgain();
        this.fightOrFly(user)
    }
    fightOrFly(user){
        console.log('\nOh boy! The monster looks strong! Shall you bravely try to fight it or cowardly run for your life? (fight/run)')
        let braveOrCoward=prompt('>').toLowerCase()
        


        if (braveOrCoward=='fight'||braveOrCoward=='f'){
            console.log('\nYou bravely (or stupidly, we will see how you do) chose to fight the monster!')
            console.log('Do you want to attack first? (y/n)')
            let attackFirst=prompt('>').toLowerCase()
            // IF USER ATTACK FIRST THEY HAVE LOWER CHANCE OF SURVIVING (40%)
            if(attackFirst=='yes'||attackFirst=='y'){
                let userGoFirst=user.attack()
                if(userGoFirst>=60){
                    console.log('YOU DESTROYED THE MONSTER!!!')
                    console.log('In complete disbelief you realise you have killed a monster all by yourself!')
                    console.log('You now need to keep walking, just in case the monster had friends...')
                }else{
                    console.log('Oops your attack was too weak and the monster attacks back!')
                    this.user.youDie()
                }
             // IF USER WAIT FOR THE MONSTER TO ATTACK, THEY HAVE HICHER CHANCE TO SURVIVE (70%) 
            }else if(attackFirst=='no'||attackFirst=='n'){
               let monsterGoFirst=Math.floor(Math.random()*100 + 1)
               if(monsterGoFirst<70){
                    console.log('The monster tries to hit you but it misses you and you counter-attack!')
                    console.log('In complete disbelief you realise you have killed a monster all by yourself!')
                    console.log('You now need to keep walking, just in case the monster had friends...')
                   }else{this.user.youDie()}
               }
               else{
                console.log('Your stuttering irritates themonster so much that he kills you!')
                user.youDie()
            } 
            }
            //IF USER STUTTER USER GETS KILLED
           
        

// Choose to run away, continue game
        else if(braveOrCoward=='run'||braveOrCoward=='r'){
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