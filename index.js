// chamar a biblioteca do express
const express = require("express");

const app  = express();

//Chamando a abertura do meu serviço
//Criação do servidor express
app.listen(8080);

//Criação da 1ª rota/
app.get("/", () => {
console.log("Hello World");
})