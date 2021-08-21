let chalk = require('chalk');
class Step{
    constructor(){
        this.m = null;
        this.y = null;
        this.n = null;
    }

    message(){
        this.m = "Are you ready for an adventure? (YES/NO)";
        return this.m;
    }

    yes(){
        this.y = `\n Golden sunlight filters through tree branches \n You can see a ladder \n \n LEFT: Get ladder \n RIGHT: Jump down the tree \n \n Type LEFT or RIGHT (L/R) \n    `

        return this.y;
    }

    no(){
        console.log(chalk.bgBlue.bold(`\n Okay, bye then! \n`))
    }
    
}

module.exports = Step;