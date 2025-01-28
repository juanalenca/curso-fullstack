require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conexão com o MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
  serverSelectionTimeoutMS: 30000,
})
  .then(() => console.log('Conexão bem-sucedida ao MongoDB!'))
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
    console.error('Detalhes do erro:', err.reason);
  });

const routes = require('./routes');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const { middlewareGobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/frontend', express.static(__dirname + '/frontend'));

const sessionOptions = session({
  secret: process.env.SESSION_SECRET || 'eu-sou-o-dragao-guerreiro',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Usando o middleware global
app.use(middlewareGobal);
app.use(routes);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

