
class Warrior{
    constructor(name){
        this.name=name;
        this.weapon=0;
        this.lives=0;
        //this.die=0;
    }
    name(){return this.name}

    currentLives(){return this.lives}

    assignName(userName){
        this.name=userName;
        console.log(`${userName} is a strange name, but we can work with that....`)
    }
    attack(){
        let damageInflicted=Math.floor(Math.random()*100 + 1);
        //console.log(`You inflicted ${damageInflicted} damage on the monster.`)
        return damageInflicted;
    }
    // NEEDS TO CHECK IF IT WORKS
    currentStrength(){
       // console.log(`You currently have ${this.weapon} weapons`)
        return this.weapon
    }
    addStrength(){
        //this.weapon=this.weapon+points
        this.weapon++;
        console.log(`WHAT A SHARP WEAPON!, you have now ${this.weapon} swords`)
        return this.weapon
    }
    
    removeLife(){
        this.lives=this.lives-1;
        return this.lives
        // console.log('YOU HAVE LOST A LIFE!')
        
    }
    addLife(){
        this.lives=this.lives+1;
        console.log('You feel stronger than before!')
        return this.lives   
    } 
    youDie(){
        console.log('YOU DIED')
        }
    }   
    

module.exports=Warrior; 