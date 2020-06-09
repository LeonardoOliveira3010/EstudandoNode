# EstudandoNodeJS
 Estudando Node

# Modulos
Quando se tem uma aplicação muito grande, o correto é dividi-la em partes. Utilizamos o sistema de modulos, assim podemos dividi-lo eem varios arquivos. Para utilizar o modulo, deverá colocar a função em uma variavel colocando sem nome essa função.
//module.exports = soma (a forma de transformar em modulo, utilizando o comando module.export).
A forma de chamar o module no arquivo principal é utilizando a função require("./pasta do arquivo "), lembrando que precisa igualar essa função em uma variavel

# Protocolo HTTP
Como fazer requisições e servir o servidor utilizando o node.
HTTP > É um Protocolo utilizado para a comunicação entre cliente e servidor, comumente falado client-server.
Para criações web, é necessario usar o Protocolo HTTP.
O Node tem um modulo HTTP por padrão, entretanto esse modulo é bem limitado, utilizaremos frameworks para agilizar a utilização do HTTP.
É necessario abrir um servidor http para se communicar com o cliente.

# Express
É um framework minimalista, ou seja é simples de utilizar, feito para ser rapido no quesito de desenvolvimento. 
Para instalação do express iremos utilizar o npm: npm install express --save