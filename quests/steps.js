class Step{
    constructor(message, yes, no){
        this.m = message;
        this.y = yes;
        this.n = no;
    }

    message(){
        return this.m;
    }

    yes(){
        return this.y;
    }

    no(){
        console.log(this.n);
    }
    
}

module.exports = Step;