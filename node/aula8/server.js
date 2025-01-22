const express = require('express')
const app = express()
const port = 3000

app.use(
    express.urlencoded({extended: true})
)


app.get('/', (req, res) => {
    res.send(`
        Hello, World!
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name="outrocampo">
        <button>Enviar formulário!</button>
        </form>
    `)
})

// A ? indica que o parametro pode ou não ser recebido
app.get('/tests/:idUsers?/:param?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Foi enviado: ${req.body.outrocampo}`)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})