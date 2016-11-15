var http=require('http'),
    url=require('url');

	http.createServer(function(req,res){
		var pathname=url.parse(req.url).pathname;

		if(pathname === '/'){
			res.writeHead(301,{
				'Location':'http://www.baidu.com'
			});
			res.end('home page');
		}
		
		
	}).listen(2000,"127.0.0.1");
	console.log('Server running an http://127.0.0.1:2000/')