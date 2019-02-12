/* brian web */

var fs 		= require('fs');
var http	= require('http');


http.createServer(function(req,res){
	switch (req.url){
		case '/css/blog.css':
			fs.readFile('public/css/blog.css', function(e, data){
				res.writeHead(200, {'Content-type':'text/css', 'Content-Length': data.length});
				res.write(data);
				res.end();
			});
			break;		
		case '/assets/images/ny_bg.jpeg':
			fs.readFile('public/assets/images/ny_bg.jpeg', function(e, data){
				res.writeHead(200, {'Content-Type':'image/jpeg', 'Content_Length':data.length});
				res.end(data);
			})
			break;
		default:
			fs.readFile('index.html', function(e, data){
				res.writeHead(200, {'Content-Type':'text/html', 'Content-Length':data.length});
				res.write(data);
				res.end();
			});
	}
}).listen(10000);



