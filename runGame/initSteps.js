const prompt = require('prompt-sync')();

class InitStep {
    constructor(step) {
        this.step = step;
        this.answer = null;
    }

    logStep() {
      let answer = prompt(`${this.step.message()}`);
      this.answer = answer;
    }

    handleAnswer() {
    
        if (this.answer === "yes") {
          this.step = this.step.yes();
        } else {
          this.step = this.step.no();
        }
        
        return this.step;
      }


}

module.exports = InitStep;