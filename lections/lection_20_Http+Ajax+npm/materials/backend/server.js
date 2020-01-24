var express = require('express');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) { // разрешаем всем видам запроса работать с нашим сервером.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа

    res.send('ok');

});

app.get('/users', function (req, res) { // req - обьект запроса, res -- обьект ответа
  const users = getDataFromDataBasse(); 

  res.send(users);
});


function getDataFromDataBasse() {
  return users = [
    {name: 'Valera'},
    {name: 'Valera'},
    {name: 'Valera'},
    {name: 'Valera'},
    {name: 'Ivan'}
  ];
}

app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/');
});



    // var data = readFile
    // fs.readFile('data.json', 'utf8', function(err, contents) { // чтение файла по относительному путю имитируем запрос в "базу данных"
    //     console.log('read start');
    
    // });