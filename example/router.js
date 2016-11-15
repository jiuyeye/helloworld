var http=require('http'),
    url=require('url');

	http.createServer(function(req,res){
		var pathname=url.parse(req.url).pathname;

		if(pathname === '/'){
			res.writeHead(200,{
				'Content-Type':'text/plain'
			});
			res.end('home page');
		}else if(pathname === '/about'){
			res.writeHead(200,{
				'Content-Type':'text/plain'
			});
			res.end('home page');
		}else if(pathname === '/redirect'){
			res.writeHead(301,{
				'Location':'/'
			});
			res.end('home page');
		}else{
			res.writeHead(400,{
				'Content-Type':'text/plain'
			});
			res.end('not page');
		}
	}).listen(2000,"127.0.0.1");
	console.log('Server running an http://127.0.0.1:2000/')