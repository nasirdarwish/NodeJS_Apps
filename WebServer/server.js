var http = require('http'),
fs = require('fs'),
util = require('util'),
mime = require('mime');
 var base = __dirname + '/public';
 
 //var base = './public';

 var server = http.createServer(function (req, res) {
     var path = base + req.url;
     util.log("Incoming request for: " + path + " method: " + req.method);
     

     if (req.method != "GET") {
         res.writeHead(405);
         res.end("Method " + req.method + " not allowed"); return;
     }

     if (req.url == "" || req.url == "/") {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.end("<h2>Hello, I am alive.</h2>"); return;
     }

     fs.exists(path, function (exist) {
         if (!exist)
         { res.writeHead(404); res.end(http.STATUS_CODES[404]); return; }

         serveFile(res, path);
     })

 })

 

function serveFile(res,path)
{ // Setting content type
  var type = mime.lookup(path);
  res.setHeader('Content-Type', type);    
  res.statusCode = 200; // 200 status - found, no errors
  // create and pipe readable stream
  var file = fs.createReadStream(path);
   file.on("open", function() 
  { file.pipe(res); });
  // file.pipe(res);
  file.on("error", function(err)
  {  if (err) 
     { res.writeHead(500); res.end('Server Error!'); }
  });
} 
 

var port = 8080; // 80 for runnable.com; for WebMatrix use 8080
server.listen(port); 
console.log('Server running at port ' + port);
