var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
    fs.readFile("foo.json", 'utf-8', function(err, content) {
      content = JSON.parse(content);

      console.log(content, 'content');

      content.isMarried = true;


      fs.writeFile("foo.json", JSON.stringify(content), (err) => {
        if (err) console.log(err);
  
        console.log("Successfully Written to File.");
      });

      res.status(200);
      res.send(content);
    });



});

app.post('/users', function (req, res) { // req - обьект запроса, res -- обьект ответа
  const users = getDataFromDataBasse(); 
  console.log(req.body)
  res.send(users);
});

// app.post('/write', function (req, res) { // req - обьект запроса, res -- обьект ответа


//   res.send('abc');
// });



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