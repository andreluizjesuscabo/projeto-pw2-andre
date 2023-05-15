const express = require ('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const fabricanteController = require('./controller/fabricanteController');
app.use('/', fabricanteController);

const produtoController = require('./controller/produtoController');
app.use('/', produtoController);

app.listen(3000, ()=>{
    console.log('Servidor HTTP esta rodando lindamente em http://localhost:3000')
});