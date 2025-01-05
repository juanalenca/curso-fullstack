/*const pessoa = {
    //chave: valor
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123
    }
}
console.log(pessoa.nome)
console.log(pessoa['sobrenome'])
*/

const pessoa1 = new Object()
pessoa1.nome = 'Maria'
pessoa1.sobrenome = 'Sá'
pessoa1.idade = 30
pessoa1.falarNome = function(){
    return console.log(`Olá, meu nome é ${this.nome}`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento()) 

//delete pessoa1.nome


