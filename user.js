class User{
    constructor(name) {
        this.name=name;  
    }
    getInfo(){
        return this.name
    }
    nameList=[];

    addNameToList(name){
        this.nameList.push(name)
    }
    
}

module.exports=User; 