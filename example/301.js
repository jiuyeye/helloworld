var http=require('http');
	http.createServer(function(req,res){
		res.writeHead(301,{
			'Location':'http://www.baidu.com'
		});
		res.end();
	}).listen(2000,"127.0.0.1");
	console.log('Server running an http://127.0.0.1:2000/')