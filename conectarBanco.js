// const Sequelize = require('sequelize') // exportando o sequelize
// const sequelize = new Sequelize('sistemadeacesso', 'root', '30105549', { //Configurando o banco de dados
//     host: 'localhost', //Qual o computador que está rodando o BD
//     dialect: 'mysql' //qual banco quer se conectar
// })

// sequelize.authenticate().then(function(){ // Verificar se a gente conseguiu se conectar com o BD
//     console.log('Conectado com sucesso')
// }).catch(function(erro){
//     console.log("Falha ao se conectar " + erro)
// })

// //then() funciona como uma função de callback, é uma função especial que é executada quando um evento acontece

// //Models....................

// // Postagens

// const postagem = sequelize.define('postagens', {
//     titulo: {
//         type:  Sequelize.STRING   
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// // postagem.sync({force: true}) // Essa função vai sincronizar o model com o mysql

// // Usuarios
// const usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },

//     sobrenome: {
//         type: Sequelize.STRING
//     },

//     email: {
//         type: Sequelize.STRING
//     }
// })

// // usuario.sync({force: true})
// usuario.create({
//     nome: 'Leonardo',
//     sobrenome: 'Oliveira',
//     email: 'leonardo_oliveira@outlook.com',
// })