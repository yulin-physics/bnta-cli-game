//monster has HP, it attacks, and does/take damage to character
const Warrior = require("./warrior");
const prompt = require("prompt-sync")();

class Monster{
    constructor(hp,monster) {
    this.monster=monster;
    this.hp=50;
    this.user= new Warrior();
    }
//  currentMonsterHealth(){
//      return this.hp;
//  }   
//  takeDamage(damageTaken){
//      let damage=damageTaken;
//      let mHealth=this.hp;
//      if (mHealth<damage){
//          console.log('YOU DESTROYED THE MONSTER!!!')
//          console.log('In complete disbelief you realise you have killed a monster all by yourself!')
//          console.log('You now need to keep walking, just in case the monster had friends...')
//          this.hp=0
//         return this.currentMonsterHealth()

//          }
//      else if((mHealth-damage)>mHealth/2){
//          console.log('You inflicted damage but the monster is still pretty much alive!')
//          this.hp=mHealth-damage
//          return this.currentMonsterHealth()

         
//      }else{
//          console.log('The monster laughs at you! UH-OH!')
//          // monster attacks user
//          this.monsterAttack()
        

//         }
 //};
 //Monster attacks protagonist inflicting damage
 monsterAttack(){

    let damageInflictedMonster=Math.floor(Math.random()*100 + 1);
    // if (damageInflictedMonster>50){
    //     console.log(`\nThe monster hit you with his paw, inflicting ${damageInflictedMonster} damage on you!`)
    //     console.log('YOU DIED')
    //     process.exit()

    // }else{
    //     console.log(`\nThe monster hit you with his paw, inflicting ${damageInflictedMonster} damage on you, but you still stand!`)
    
    // }
    return damageInflictedMonster;
 }

}
 
module.exports=Monster;