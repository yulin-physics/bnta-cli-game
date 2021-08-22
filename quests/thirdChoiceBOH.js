const Warrior = require("./warrior");
const prompt = require("prompt-sync")();
const PlayMiniGame=require("./ifPlayed");

class ThirdChoice{
    constructor(){
        this.user= new Warrior();
        this.playMiniGame= new PlayMiniGame();
        this.ifThirdChoice()

    }
ifThirdChoice(){
    
    console.log('\nAfter walking the whole day you find a village....You are tired and would like to find a place where to rest for the night...')
    console.log('\nDo you go to the village to rest? (y/n)')
    let goToVillage=prompt(">").toLowerCase()
// if you go to village:
    if (goToVillage=='yes'||goToVillage=='y'){
        console.log('You meet traveller who wants to play cards with you')
        console.log('\nDo you go to play? (y/n)')
        let playOrNot=prompt(">").toLowerCase()
        this.playMiniGame.functionToPLay(playOrNot)
    }

} 
}      
module.exports=ThirdChoice