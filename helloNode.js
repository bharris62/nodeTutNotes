
'use strict';
const http = require('http');
//get server up and running
http
    .createServer((req, res) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h1>Hello NodeJS</h1>');
    })
    .listen(3000, () => console.log('Server Running on port 3000'));
