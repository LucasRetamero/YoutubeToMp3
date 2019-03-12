//create vars
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//open pug file
app.set('view engine','pug');
//use foldes
app.use(express.static('public'));
app.use(express.static('bootstrap'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dist'));
app.use(express.static('scss'));
//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//create home route
app.get('/',function(req,res){
return res.render(__dirname+'/public/'+'home');
});

//create get date of form
app.post('/download-video',function(req,res){
//req.body = post, req.query = get
return res.send(req.body);
});

//create listen event
app.listen(3000,function(){
console.log('running on port 3000');
});
