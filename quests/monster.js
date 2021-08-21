//monster has HP, it attacks, and does/take damage to character
const Warrior = require("./warrior");
const prompt = require("prompt-sync")();

class Monster{
    constructor(hp,monster) {
    this.monster=monster;
    this.hp=hp;
    this.user= new Warrior();
    }
 monsterHealth(){
     this.hp=Math.floor(Math.random()*100 + 1);
     return this.hp;
 }   
 takeDamage(damageTaken){
     let damage=damageTaken;
     let mHealth=this.monsterHealth();
     if (mHealth<damage){
         console.log('YOU DESTROYED THE MONSTER!!!')
         console.log('In complete disbelief you realise you have killed a monster all by yourself!')
         console.log('You now need to keep walking, just in case the monster had friends...')
     }else if((mHealth-damage)>mHealth/2){
         console.log('Damage inflicted but the monster is still pretty much alive!')
         //add choice to attack or run
     }else{
         console.log('The monster laughs at you! UH-OH!')
         //add monster attacking user
         this.monsterAttack()
         //add choice to attack or run

        }
 };
 //Monster attacks protagonist inflicting damage
 monsterAttack(){
    //  let monsterHp=this.monsterHealth()
    //  if(monsterHp>protagonist.Strength()){
    //      if(Math.floor(Math.random()*100 + 1)<70){
    //          console.log('The monster is attacking you and inflicts a lot of damage!!!')
    //          protagonist.removeLives()
    //      }else{
    //          console.log('Fewwww, luckily it missed you! You have the chance to contro-attack and hit the monster! ')
            
    //         }
    //  }

    let damageInflictedMonster=Math.floor(Math.random()*100 + 1);
    if (damageInflictedMonster>50){
        console.log(`\nThe monster hit you with his paw, inflicting ${damageInflictedMonster} damage on you!`)
        this.user.removeLife();
        //add run away etc!
    }else{
        console.log(`\nThe monster hit you with his paw, inflicting ${damageInflictedMonster} damage on you, but you still stand!`)
    // add run option etc
    }
    return damageInflictedMonster;
 }
 }
module.exports=Monster;