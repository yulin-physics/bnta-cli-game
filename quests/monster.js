//monster has HP, it attacks, and does/take damage to character
class Monster{
    constructor(hp,monster) {
    this.monster=monster;
    this.hp=hp;
    }
 monsterHealth(){
     this.hp=Math.floor(Math.random()*100 + 1);
     return this.hp;
 }   
 takeDamage(protagonist){
     let damage=protagonist.attack();
     let mHealth=this.monsterHealth();
     if (mHealth<damage){
         console.log('YOU DESTROYED THE MONSTER!!!')
     }else if((mHealth-damage)>mHealth/2){
         console.log('Damage inflicted but the monster is still pretty much alive!')
     }else{console.log('The monster laughs at you! UH-OH!')}
 };
 //Monster attacks protagonist inflicting damage
 monsterAttack(protagonist){
     let monsterHp=this.monsterHealth()
     if(monsterHp>protagonist.Strength()){
         if(Math.floor(Math.random()*100 + 1)<70){
             console.log('The monster is attacking you and inflict a lot of damage!!!')
             protagonist.removeLives()
         }else{
             console.log('Fewwww, luckily it missed you! You have the chance to contro-attack and hit the monster! ')
            
            }
     }
 }
 }
module.exports=Monster;