var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var util = require('util');

http.createServer(function(request, response) {
  if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });

    return;
}else if(request.url == '/show'){
    console.log('request for show is received');
    rs.readFile('/temp/1.png','binary',function(error,file){
        if(error){
            response.writeHead(500, {'content-type': 'text/plain'});
            response.write('received upload:\n\n');
            response.end(util.inspect({fields: fields, files: files}));
        }
    })
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('received upload:\n\n');
    response.end(util.inspect({fields: fields, files: files}));
}

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);
