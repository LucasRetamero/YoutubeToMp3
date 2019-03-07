//create vars
var express = require('express');
var app = express();

//open pug file
app.set('view engine','pug');
//use foldes
app.use(express.static('public'));
app.use(express.static('bootstrap'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dist'));
app.use(express.static('scss'));

//create home route
app.get('/',function(req,res){
return res.render(__dirname+'/public/'+'home');
});

//create listen event
app.listen(3000,function(){
console.log('running on port 3000');
});
