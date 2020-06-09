const express = require("express") //Está sendo feito a importação do modulo express e estou colocando na variavel express

const app = express()//Estou utilizando a função express e colocando na variavel app. Ela cria uma instancia para dentro dessa variavel

app.get("/", function(req, res){
    res.send('Olá Mundo')// parametro de resposta res, o send serve para enviar algo 
});

app.get("/sobre",function(req, res){
    res.send("Aqui é sobre o conteudo")// parametro de resposta res do qual estou criando uma rota sobre.
});

app.get("/blog", function(req, res){
    res.send("Aqui é o blog")
}
)
























app.listen(3000, function(){
    console.log('servidor rodando na url http://localhost:3000')
})//criando um servidor com o express, ela deverá ser a ultima linha do código
