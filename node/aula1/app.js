// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome
// console.log(mod1.falaNome())

const path = require('path')
const axios = require('axios')
const{Pessoa} = require('./mod1')

const p1 = new Pessoa("Juan")
axios('https://www.otaviomiranda.cm.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))