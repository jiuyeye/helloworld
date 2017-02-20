var http = require('http');

function fetchPage() {
  console.log('fetching page');
  http.get({ host: 'www.163.com', path: '/?delay=2000' }, function(res) {
    console.log('data returned from 163.com');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

function fetchApi() {
  console.log('fetching api');
  http.get({ host: 'www.baidu.com', path: '/?delay=2000' }, function(res) {
    console.log('data returned from baidu');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

fetchPage();
fetchApi();
