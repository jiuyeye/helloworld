var http=require('http');
	http.createServer(function(req,res){
		res.writeHead(200,{'Content-Type':'text/plain'});
		if(req.url!=='/favicon.ico'){
			console.log(1);
			res.end('Hello Wdddorld\n');
		}
	}).listen(3300,"127.0.0.1");
	console.log('Server running an http://127.0.0.1:3300/')
