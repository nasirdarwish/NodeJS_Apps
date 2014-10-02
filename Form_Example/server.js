var http = require('http');
 var postHTML =
'<html><head><title>Post Example</title></head>' +
'<body>' +
'<form method="post">' +
'Your Fist Name: <input name="first_name"><br>' +
'Your Last Name: <input name="last_name"><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';
 
 function formValues (data)
{
    var splits = data.split('&');
    var hash = [];
    console.log(splits.length);
    for (i = 0; i < splits.length; i++)
    {   var iSplit = splits[i].split('=');
        hash[iSplit[0]] = iSplit[1];
    }
    return hash;
}


function handelRequest(req,res)
{
    if (req.url === '/favicon.ico')
   {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
    return;
  }
    var body = "";
 
   req.on('data', function (chunk) 
   { body += chunk; });
 
    req.on('end', function ()
    {  console.log('POSTed: ' + body);
       if (body != '')
       {  var hash = formValues(body);
          console.log("input1 = " + hash["first_name"]);
          console.log("input2 = " + hash["last_name"]);
         res.writeHead(200);
         res.write('Hello ' + hash["first_name"] + ', ' + hash["last_name"]);
          res.end();
          return; 
       }

     res.writeHead(200);
     res.end(postHTML);
    }
   );

}
 
var server = http.createServer(handelRequest);


// Port 8080 will be used if app is run from CLI
var Port = process.env.PORT || 80;

server.listen(Port);
 console.log("Server listening on Portt = " + Port );