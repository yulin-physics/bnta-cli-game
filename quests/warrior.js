// inherits from Character class
class Warrior{
    constructor(name){
        this.name=name;
        this.strength=0;
        this.lives=0;
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
        console.log(`Your current strenght is: ${this.strength}`)
        //return this.strength
    }
    addStrength(points){
        this.strength=this.strength+points
        console.log(`Experience point added: ${points}, your strength now is ${this.strength}`)
        //return this.strength
    }
    removeStrength(points){
        let newStrength=this.strength=this.strength-points
        console.log(`experience point removed: ${points}, your strength now is ${newStrength}`)
        if (newStrength<0){
            this.removeLives();
        }
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
        process.exit()
        }
    }   
    

module.exports=Warrior; 