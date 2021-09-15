const http = require("http");
const servidor = http.createServer(function(req, res){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Nome e turma</title></head>');
res.write('<body>Gabriel Alves dos Santos Info 4B</body>');
res.write('</html>');
res.end();
});


servidor.listen(3000, function(){
  console.log("O servidor esta safe")
});