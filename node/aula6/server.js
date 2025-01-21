const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
        Hello, World!
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send("Recebi o formulário!")
})

app.get('/users', (req, res) => {
    res.json([
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Alice'}
    ])
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})