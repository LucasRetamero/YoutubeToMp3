//create vars
var express    = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var horizon      = require('horizon-youtube-mp3');
var path         = require('path');
var downloadPath = path.join(__dirname);
var testing      = "Hello World"; 
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

//create success download route
app.get('/download-success',function(req,res){
return res.render(__dirname+'/public/'+'success');
});

//create download route
app.get('/download-mp3',function(req,res){
horizon.downloadToLocal(
  'https://www.youtube.com/watch?v=WcTRQXtXJPs',
  downloadPath,
  null,
  null,
  null,
  onConvertVideoComplete,
  onConvertVideoProgress
)
});

//testing download of video
/*
horizon.downloadToLocal(
  'https://www.youtube.com/watch?v=WcTRQXtXJPs',
  downloadPath,
  null,
  null,
  null,
  onConvertVideoComplete,
  onConvertVideoProgress
);
 */
function onConvertVideoComplete(err, result) {
  console.log(err, result);
  // Will return...
  //null, conversionFileComplete
}
 
function onConvertVideoProgress(percent, timemark, targetSize) {
  console.log('Progress:', percent, 'Timemark:', timemark, 'Target Size:', targetSize);
  // Will return...
  // Progress: 90.45518257038955 Timemark: 00:02:20.04 Target Size: 2189
  // Progress: 93.73001672942894 Timemark: 00:02:25.11 Target Size: 2268
  // Progress: 100.0083970106642 Timemark: 00:02:34.83 Target Size: 2420
}

//create listen event
app.listen(3000,function(){
console.log('running on port 3000');
});
