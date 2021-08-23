    const Warrior = require("./warrior");
    const Monster=require("./monster")
    const prompt = require("prompt-sync")();
    const chalk = require("chalk");


    class UserVsMonster{
        constructor(user){
            this.user= new Warrior();
            this.monster=new Monster();
            this.fightOrFly(user)
        }
        fightOrFly(user){
            console.log('\nOh boy! The monster looks strong!')
            console.log(chalk.blue.bold('\nShall you bravely try to FIGHT it or cowardly RUN for your life? (f/r)'))
            let braveOrCoward=prompt('> ').toLowerCase()
            

            if (braveOrCoward=='fight'||braveOrCoward=='f'){
                console.log('\nYou bravely (or stupidly, we will see how you do) chose to fight the monster!')
                console.log(chalk.blue.bold('\nDo you want to attack first? (y/n)'))
                let attackFirst=prompt('> ').toLowerCase()
                // IF USER ATTACK FIRST THEY HAVE LOWER CHANCE OF SURVIVING (40%)
                if(attackFirst=='yes'||attackFirst=='y'){
                    let userGoFirst=user.attack()
                    if(userGoFirst>=60){
                        console.log('\nYOU DESTROYED THE MONSTER!!!')
                        console.log('\nIn complete disbelief you realise you have killed a monster all by yourself!')
                        console.log('\nYou now need to keep walking, just in case the monster had friends...')
                    }else{
                        console.log('\nOops your attack was too weak and the monster attacks back!')
                        user.youDie()
                        user.playOn = false
                    }
                // IF USER WAIT FOR THE MONSTER TO ATTACK, THEY HAVE HIGHER CHANCE TO SURVIVE (70%) 
                }else if(attackFirst=='no'||attackFirst=='n'){
                let monsterGoFirst=Math.floor(Math.random()*100 + 1)
                if(monsterGoFirst<70){
                        console.log('\nThe monster tries to hit you but it misses you and you counter-attack!')
                        console.log('\nIn complete disbelief you realise you have killed a monster all by yourself!')
                        console.log('\nYou now need to keep walking, just in case the monster had friends...')
                    }else{user.youDie()
                        user.playOn = false
                    }
                }
                else{
                    console.log('\nYour stuttering irritates the monster so much that he kills you!')
                    user.youDie()
                    user.playOn = false
                } 
                }
                //IF USER STUTTER USER GETS KILLED
            
            

    // Choose to run away, continue game
            else if(braveOrCoward=='run'||braveOrCoward=='r'){
                console.log('\nWell, not everyone is born to be a hero.')
                console.log('\nSurely you must have other qualities...right?')
                console.log('\nLuckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
                console.log('\nYou take a deep breath and then start planning the next move.')
    // User stutter,continue game           
            }else{
                console.log('\nCOME ON! NO TIME TO STUTTER! RUUUUUUUUUUN!!!!')
                console.log('\nLuckily enough you escaped certain(?) death and the monster decided not to waste its time with you.')
                console.log('\nYou take a deep breath and then start planning the next move.')
            }
        }
    }
    module.exports=UserVsMonster;