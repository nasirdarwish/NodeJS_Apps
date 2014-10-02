var http = require('http'); // require (use) the http module
// create an HTTP server

function handleRequest(req, res) 
{  // this function is called when a request is received
 
   var bodyData='';

    req.on('data', function (chunk) 
   { bodyData += chunk; });

    req.on("end", function () 
   {   
    console.log('POSTed: ' + bodyData);
   
     res.writeHead(200, { 'Content-Type': 'text/html' }  );

       res.write(JSON.stringify(req.headers) );
     res.end(bodyData)
     res.end(bodyData) 
    })
     
}


var myServer = http.createServer(handleRequest);
 
var port = process.env.PORT || 80;
myServer.listen(port); 
console.log('Server running at port ' + port);
