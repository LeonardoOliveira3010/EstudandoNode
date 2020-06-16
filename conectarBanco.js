const Sequelize = require('sequelize') // exportando o sequelize
const sequelize = new Sequelize('sistemadeacesso', 'root', '30105549', { //Configurando o bd
    host: 'localhost', //Qual o computador que está rodando o BD
    dialect: 'mysql' //qual banco quer se conectar
})

sequelize.authenticate().then(function(){ // Verificar se a gente conseguiu se conectar com o BD
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log("Falha ao se conectar " + erro)
})

//then() funciona como uma função de callback, é uma função especial que é executada quando um evento acontece