// inherits from Character class
class Warrior{
    constructor(name){
        this.name=name;
        this.strength=0;
        this.lives=3;
    }
    name(){return this.name}

    currentLives(){return this.lives}

    assignName(userName){
        this.name=userName;
        console.log(`${userName} is a strange name, but we can work with that....`)
    }
    attack(){
        let damageInflicted=Math.floor(Math.random()*100 + 1);
        console.log(`You inflicted ${damageInflicted} damage on the monster.`)
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
        console.log('YOU HAVE LOST A LIFE!')
        this.youDie(this.lives)
    }
    addLife(){
        this.lives=this.lives+1;
        console.log('You feel stronger than before! One life was added!')    
    } 
    youDie(lives){
        if (lives=0){
            console.log('YOU ARE DEAD, bye bye')
            //execute a fucntion that stops the game and brings you back to 'wanna play again?'
        }
    }   
    }

module.exports=Warrior; 