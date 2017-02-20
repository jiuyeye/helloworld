var fs = require('fs'),
    http = require('http');

http.get({ host: 'baidu.com' }, function(res) {
    console.log("Got a response from baidu.com");
}).on('error', function(e) {
    console.log("There was an error from baidu.com");
});

fs.readFile('file1.txt', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('File 1 read!');
    console.log(data);
});

http.get({ host: 'www.163.com' }, function(res) {
    console.log("Got a response from 163.com");
}).on('error', function(e) {
    console.log("There was an error from 163.com");
});

fs.readFile('file2.txt', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('File 2 read!');
    console.log(data);
});
