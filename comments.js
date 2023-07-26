// Create web server
// Run: node comment.js
// Access: http://localhost:8081/
// Access: http://localhost:8081/comment
// Access: http://localhost:8081/comment?year=2017&month=July
// Access: http://localhost:8081/comment/2017/July

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<p>Url: ' + req.url + '</p>');
  res.write('<p>Query: ' + url.parse(req.url, true).query + '</p>');
  res.write('<p>Year: ' + url.parse(req.url, true).query.year + '</p>');
  res.write('<p>Month: ' + url.parse(req.url, true).query.month + '</p>');
  res.write('<p>Pathname: ' + url.parse(req.url, true).pathname + '</p>');
  res.write('<p>Pathname: ' + url.parse(req.url, true).pathname.split('/')[2] + '</p>');
  res.end();
}).listen(8081);


