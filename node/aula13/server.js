const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const session = require('express-session'); 
const {middlewareGobal} = require('./src/middlewares/middleware')

// Configurando express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'eu-sou-o-dragao-guerreiro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // 'true' em produção com HTTPS
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/frontend', express.static(__dirname + '/frontend'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Our own middleware
app.use(meuMiddleware);
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
