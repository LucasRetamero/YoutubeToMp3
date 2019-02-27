//create http module
var http = require('http'),
          host = '127.0.0.1',
		  port = '9000';
		  
//create file system
const fs = require('fs');
//create ytdl-core
const ytdl = require('ytdl-core');

//create http server
var serve = http.createServer(function(req,res){
//create writeHead
res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
ytdl('https://www.youtube.com/watch?v=0YS1M7F68hQ').pipe(fs.createWriteStream('video3.mp3'));
res.end('<h4>Hello World</h4>');	
}).listen(port,host,function(){
 console.log('Running http://'+host+':'+port);	
});

//Library
//https://www.npmjs.com/package/ytdl-core
		  