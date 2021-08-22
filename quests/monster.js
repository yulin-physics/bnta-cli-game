const Warrior = require("./warrior");
const prompt = require("prompt-sync")();

class Monster{
    constructor(monster) {
    this.monster=monster;
    this.user= new Warrior();
    }

 monsterAttack(){
    let damageInflictedMonster=Math.floor(Math.random()*100 + 1);
    return damageInflictedMonster;
 }

}
 
module.exports=Monster;