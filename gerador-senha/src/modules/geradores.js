const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(55, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simboos = ',.;/:?\|=-+_)(*&¨¨%$#@!"][}{ºª°><§¬¢£´³²¹~^`'
const geraSimbolo = () => simboos[rand(0, simboos.length)]

function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos){
    const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++){
        //<verdadeiro>> && <executado> | <falso> && <não executado>
        maiuscula && senhaArray.push(geraMaiuscula())
    }
}