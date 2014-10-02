var http = require('http'); // require (use) the http module
// create an HTTP server
var myServer = http.createServer(function handleRequest(req, res) 
{  // this function is called when a request is received
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   // send this as part of the response
   res.write('Hello World\n');
   res.end();
});
 
var port = process.env.PORT || 80;
myServer.listen(port); 
console.log('Server running at port ' + port);
