const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
// const bodyParser = require('body-parser')

// Configuração
    // template Engine
    // Main é o template padrão da aplicação
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Configuração do Body Parser
    // app.use(bodyParser.urlencoded({extended: false}))
    // app.use(bodyParser.json)

    // Conexão com o banco de dados
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('sistemadeacesso', 'root', '30105549', { 
        host: 'localhost', //Qual o computador que está rodando o BD
        dialect: 'mysql' //qual banco quer se conectar
    })

// Criação de rota
app.post('/add', function(req, res){
    req.body.conteudo
})



app.listen(2000, function(){
    console.log('Server http://localhost:2000')
})