// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {
    
    // content header  
    res.writeHead(200, {'content-type': 'text/plain'});  
    
    // write message and signal communication is complete  
    res.end("Hello, World in my custom runnner\n");
    }
).listen(3000);
    
console.log('Server running on 3000');