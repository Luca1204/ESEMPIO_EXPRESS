var express = require('express');
var app = express(); 

const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'home.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/menupranzo',function(req,res){
    res.sendFile(path.join(__dirname,'menupranzo.html')); //__dirname : Ritorna la cartella del progetto
   });
   app.get('/scaricamenu',function(req,res){
    res.sendFile(path.join(__dirname,'scaricamenu.html')); //__dirname : Ritorna la cartella del progetto
   });
   app.get('/menujson',function(req,res){
    res.sendFile(path.join(__dirname,'MenuSera.json')); //__dirname : Ritorna la cartella del progetto
   });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
