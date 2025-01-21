const path = require('path')
const filePath = path.resolve(__dirname, 'test.json')
const write = require('./modules/write')
const read  = require('./modules/read')

// const people = [
//     {name: 'Joe'},
//     {name: 'Jane'},
//     {name: 'Bob'},
//     {name: 'Alice'},
// ]
// const json = JSON.stringify(people, '', 2)
// write(filePath, json)

async function readBook(path){
    const data = await read(path)
    renderData(data)
}

function renderData(data){
    data = JSON.parse(data)
    data.forEach(value => {
        console.log(value)
    });
}
readBook(filePath)