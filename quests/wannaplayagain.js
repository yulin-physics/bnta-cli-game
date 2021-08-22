let GameON=require('./myGameWithClasses.js')
const prompt = require("prompt-sync")();
class PlayAgain{
    constructor(){
        this.wannaPlayAgain()
    }
    wannaPlayAgain(){
        console.log('Want to play again? (y/n)')
        let playOrQuit=prompt('>').toLowerCase()
        if(playOrQuit=='yes'||playOrQuit=='y'){
        GameON.startAdventure()
        }else if(playOrQuit=='no'||playOrQuit=='n'){
            console.log('Ok then! BYE BYE.')
            process.exit()
        }else{
            console.log('Come back when you can spell yes or no....BYE.')
            process.exit()
        }
    }
}
module.exports=PlayAgain;