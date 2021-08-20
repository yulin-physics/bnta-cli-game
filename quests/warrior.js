// inherits from Character class
class Warrior{
    constructor(name){
        this.name=name;
        this.strength=0;
        this.lives=3;
    }
    name(){return this.name}

    assignName(userName){
        this.name=userName;
        console.log(`${userName} is a strange name, but ok`)
    }
    attack(){
        let damageInflicted=Math.floor(Math.random()*100 + 1);
        console.log(`You attacked the monster and removed ${damageInflicted} health points from it.`)
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
    removeLives(){
        this.lives=this.lives-1;
        console.log('Oh NO! YOU LOST A LIFE!')
    } 
    youDie(){
        if (this.lives=0){
            console.log('YOU ARE DEAD, bye bye')
            //execute a fucntion that stops the game and brings you back to 'wanna play again?'
        }
    }   
    }

module.exports=Warrior; 