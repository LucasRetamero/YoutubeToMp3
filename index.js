//create vars
var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var horizon      = require('horizon-youtube-mp3');
var path         = require('path');
var downloadPath = path.join(__dirname);

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

//create download route
app.post('/download-mp3',function(req,res){
if(req.body.urlVideo == "" || res.wayFolder == ""){ //case empty, no work will return to home 
res.redirect('/');
}else{ //case not empty, make the download and convertion to mp3
horizon.downloadToLocal(
  req.body.urlVideo,
  req.body.wayFolder,
  null,
  null,
  null,
  onConvertVideoComplete,
  onConvertVideoProgress
)
}
});

//Create to show the complete download
function onConvertVideoComplete(err, result){
  console.log(err, result);
  // Will return...
  //null, conversionFileComplete
}

//Create to show the progress of the donwloading 
function onConvertVideoProgress(percent, timemark, targetSize) {
  console.log('Progesso:',percent+'%');
  // Will return...
  // Progress: 90.45518257038955 Timemark: 00:02:20.04 Target Size: 2189
  // Progress: 93.73001672942894 Timemark: 00:02:25.11 Target Size: 2268
  // Progress: 100.0083970106642 Timemark: 00:02:34.83 Target Size: 2420
}

//create listen event
app.listen(3000,function(){
console.log('running on port 3000');
});
