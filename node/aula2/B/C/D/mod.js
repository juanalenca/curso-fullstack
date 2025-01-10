module.exports = class Dog{
    constructor(nome){
        this.nome = nome
    }
    bark(){
        console.log(`${this.nome} says au au`)
    }
}
