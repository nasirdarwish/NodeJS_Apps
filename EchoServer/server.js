var http = require('http'); // require (use) the http module
// create an HTTP server




function handleRequest(req, res) 
{  // this function is called when a request is received
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   var bodyData='';

   req.on("data", function (err,data) 
   { bodyData += data; }


    req.on("end", function (err,data) 
   { res.writeHead(200, { "content-type": "text/html" }  );
     res.write()
   
   
   
    }

   // send this as part of the response
   res.write('Hello World\n');
   res.end();
}


var myServer = http.createServer(handleRequest);
 
var port = process.env.PORT || 80;
myServer.listen(port); 
console.log('Server running at port ' + port);
