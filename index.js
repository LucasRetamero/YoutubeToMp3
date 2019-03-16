//create vars
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var horizon    = require('horizon-youtube-mp3');

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


horizon.getInfo('http://youtube.com/watch?v=NEA0BLnpOtg', function(err, e){
 
  console.log(e);
 
  /**
     * Will Return:
     *
     * { isValid: true,
     *   videoName: 'OZIELZINHO - TOP GEAR 2.0',
     *   videoThumb: 'https://i.ytimg.com/vi/NEA0BLnpOtg/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=FoGsoudXCGPU-Fb6epRh1eIzVDs',
     *   videoTime: '2:35',
     *   videoTimeSec 244,
     *   videoThumbList: {sd: 'http...', mq: 'http...', hq: 'http...', hd: 'http...'},
     *   videoFile: 'https://....'
     *   videoFormats: [...]}
     */
});

//create listen event
app.listen(3000,function(){
console.log('running on port 3000');
});
