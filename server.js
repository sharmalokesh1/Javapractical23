var http = require('http');

http.createserver(function(req, res){
    res.write('Hello Lokesh, I am your web server responding you!!!');
    res.end();
    console.log('Web Server is running at 8080 port number')
}).listen(8080);