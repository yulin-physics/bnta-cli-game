class BlackJack{
    constructor(){
        this.playersScore = this.dealCard() + this.dealCard();
    }
    dealCard(){
        return Math.floor(Math.random()*11) +1;
    }
    getScore(){
        return this.playersScore;
    }
    twist(){
        this.playersScore += this.dealCard();
    }
    isBust(){
        return this.playersScore > 21;
    }
}

module.exports = BlackJack;