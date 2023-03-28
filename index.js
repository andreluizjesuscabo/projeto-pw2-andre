const express = require ('express');

const app = express();

app.listen(3000, ()=>{
    console.log('Servidor HTTP esta rodando lindamente em http://localhost:3000')
});