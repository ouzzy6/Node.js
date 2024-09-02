const http = require('http');

const server = http.createServer( (require, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' , 'application/JSON');
    response.setHeader('Content-Length' , 19);
    response.end(JSON.stringify({ location: 'Mars' }));
}).listen(8083);