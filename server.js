const express = require('express');
const app = express();
const path = require('path');
//acessar rotas
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes);

// usando caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//caminho de arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// utilizar middleware
const { middlewareGlobal, checkCsrfError } = require('./src/middlewares/middleware');

//usar middleware
app.use(checkCsrfError);


app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
});
