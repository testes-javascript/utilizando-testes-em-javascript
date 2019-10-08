const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Olá, mundo!');
});

app.get('/nome', function(req, res) {
  res.send('Olá, leitor tudo bom?');
});

app.listen(3000, function() {
  console.log('O App está em execução na porta: 3000!');
});
