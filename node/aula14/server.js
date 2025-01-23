const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ruaad9253:ZtrYgo8qd3OWdw1C@cursojs01.cuhsd.mongodb.net/?retryWrites=true&w=majority&appName=cursojs01';

// Conexão com o MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const routes = require('./routes');
const path = require('path');
const session = require('express-session');
const { middlewareGobal } = require('./src/middlewares/middleware');

// Configurando express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'eu-sou-o-dragao-guerreiro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // 'true' em produção com HTTPS
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/frontend', express.static(__dirname + '/frontend'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Usando o middleware global
app.use(middlewareGobal);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
