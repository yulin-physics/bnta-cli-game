const Warrior = require("./warrior");
class PlayMiniGame{
    constructor(){
        this.functionToPlay()
        this.user= new Warrior();
    }
    functionToPlay(answer){
        if (answer=='y'||answer=='yes'){
            console.log('You play mini game, you get sword')
            console.log('day after use sword to kill monster and get amulet')
        }else{
            console.log('no mini game.just sleep')
            console.log('no sword, so chance to die waking monster up')
            console.log('If only you had a proper weapon....The only way to get the amulet is to quietly approach the monster and steal it! ')
            if(Math.floor(Math.random()*100 + 1)>40){
                console.log('You might not be the best hero on the planet! But surely you are silent like a cat!')
                console.log('You steal the amulet without waking the monster up. NOW RUN BACK TO YOUR MASTER BEFORE THE MONSTER WAKES UP!')
                console.log('\n* A DAY LATER *')
                console.log('You did it!!! You managed to bring the amulet to you master, who is so happy that makes you rich!')
                console.log('THE END')
            }else{
                console.log('You try hard not to make a sound but then a bird starts singing, waking the monster up. The monster sees you and immediately attacks you!')
                this.user.youDie()
            }
        }
    }
}
module.exports=PlayMiniGame