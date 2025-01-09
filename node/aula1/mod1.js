// const nome = "Juan"
// const idade = 19

// const falaNome = () => `Olá, meu nome é ${nome}!`

// module.exports.nome = nome
// module.exports.idade = idade
// module.exports.falaNome = falaNome

// exports.nome = nome
// exports.idade = idade
// exports.falaNome = falaNome
// this.qualquerCoida = ":)"

// console.log(exports)

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const nome = "Juan"
const idade = 19

module.exports = {
    Pessoa,
    nome,
    idade
}