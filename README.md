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

# Rota
É um caminho para a sua aplicação ex: www.software.com.br/users, é muito utilizado a função callback, sendo que temos o retorno do disparo dessa função.

# parametro
Está definindo qual parametro uma determinada função irá ter, o req.send só pode ser utilizado uma única vez

# Nodemon
Automação do servidor utiliza nodemon 'nome.js' e roda o servidor

# Arquivo html
Para utilizar o req junto com o html, temos que usar req.sendFile()

# MySQL
Para acessar o mysql > mysql -h localhost -u root -p. Para criar um banco de dados no mysql deve se: SHOW DATABASE nome do banco;
O MySQL é um banco de dados. Os bancos de dados são definidos por colunas e linhas, em cada coluna é colocado um parametro de informação,como por exemplo nome, email, idade. Nas linhas é mostrado o preenchimento da coluna, ex: coluna nome, linha Leonardo.

Para criar um banco de dados SQL tem que seguir esses passos:
# CREATE TABLE usuarios(
        nome VARCHAR(50),
        email VARCHAR(100),
        idade INT
    )

# Irserção de dados no banco de dados
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Leonardo Oliveira", 
    "leonardo_oliveira3010@outlook.com", 
    8
);

# Listar todos os dados da tabela: 
SELECT * FROM usuarios;

# Para especificar uma consulta MYSQL deve se usar a palavra chave where:
SELECT * FROM usuarios WHERE idade = 8;

# Deletar registro da tabela
DELETE FROM WHERE nome = ""

# Atualizando registro da tabela
UPDATE usuarios SET nome = "nome de teste", email = "x" WHERE nome = "Julia Pereira";

# SEQUELIZE 
É um  modulo que nos ajuda a trabalhar com o banco de dados mysql. Consegue fazer diversas operações utilizado o Sequelize.
npm install --save sequelize
npm install --save mysql2

# MODEL
Ele é uma referencia da sua tabela dentro do Sequelize

# HANDLEBARS
É um template engerine do qual nos dá muitas funcionalidades ao html. 
instalação npm install --save express-handlebars

# Formulario
Dentro do formulario no html temos o action e o method. O method é a forma como o seu formulario irá ser enviado para o back end. existe duas formas de envio, pelo GET e POST.
Action > Você informa para qual rota irá definir o method   
GET > Ele envia os dados pela URL (as vezes não é recomendado)
POST > Ele não passa os dados pela URL, sendo passado de uma forma diferente.

Quando se trabaçha utilizando o method POST, você precisa alterar o tipo da sua rota, utilizando app.post

# Body Parser
É um utilitario que serve pra receber qualquer tipo de dado de formulario no express
    npm install --save body-Parser

