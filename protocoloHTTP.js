var http = require("http")

// criando o servidor e utilizando o .listen para determinar qual porta iremos abrir o seervidor
// função callback > function(req, res)
http.createServer(function(req, res){
    res.end('olá mundo')
}).listen(3000)

console.log('efkgfefs')