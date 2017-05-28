var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('build'));

var list = [];
var listKeyMap = {};

app.get('/', function (req, res) {
  return 'index.html';
});

app.get('/issue', function(req, res){
  if(list.length >= 20){
    res.send(JSON.stringify(list.slice(0, 20)));
  }
  res.send(JSON.stringify(list));

});

app.put('/issue', function(req, res){

  var obj ={
    id : keygen(),
    text : req.body.text,
    voteCnt : 0,
  }
  list.push(obj);
  listKeyMap[obj.id] = obj;

  if(list.length >= 20){
    res.send(JSON.stringify(list.slice(0, 20)));
  }
  res.send(JSON.stringify(list));

});

app.put('/issue/:issueId', function(req, res){

  if(req.body.isUp){
    listKeyMap[req.params.issueId].voteCnt++;
  }else{
    if(listKeyMap[req.params.issueId].voteCnt >= 1){
      listKeyMap[req.params.issueId].voteCnt--;
    }
  }

  list.sort(function (obj1, obj2){
    return obj2.voteCnt -obj1.voteCnt;
  });


  if(list.length >= 20){
    res.send(JSON.stringify(list.slice(0, 20)));
  }
  res.send(JSON.stringify(list));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function keygen() {
  var key = s4()+s4();
  while(listKeyMap[key] !== undefined){
    key = s4()+s4();
  }
  return key;
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
