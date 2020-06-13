const express = require('express')//Está sendo feito a importação do modulo express e estou colocando na variavel express
const app = express()//Estou utilizando a função express e colocando na variavel app. Ela cria uma instancia para dentro dessa variavel

app.get('/',function(req, res){
    res.sendFile(__dirname + '/nodeHTML' + '/index.html') //__dirname irá retornar um diretorio padrão da aplicação
})

app.get('/sobre',function(req, res){
    res.sendFile(__dirname + '/nodeHTML' + '/sobre.html')
})



app.listen(3000, function(){
    console.log('Servidor Rodando')
})