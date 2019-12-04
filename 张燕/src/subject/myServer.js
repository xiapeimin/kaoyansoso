var express = require('express');
var app  = express();
var path = require('path');
var fs   = require('fs');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    });

app.get('/subject',(req,res)=>{
    var files = path.join(__dirname,'subject.json');
    fs.readFile(files,'utf-8',function(err,a){
        var c = JSON.stringify(a);
          res.send(c);
          console.log(' sb ok');
      })
})
app.get('/schoolDetail',(req,res)=>{
    var files = path.join(__dirname,'SCintroduce.json');
    fs.readFile(files,'utf-8',function(err,a){
        var c = JSON.stringify(a);
          res.send(c);
          console.log('sc ok');
      })
})

app.listen(8004,"localhost");
