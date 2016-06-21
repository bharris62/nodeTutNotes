'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
let mimes = {
    '.htm' : 'text/html',
    '.css' : 'text/css',
    '.js'  : 'text/javascript',
    '.gif' : 'image/gif',
    '.jpg' : 'image/jpeg',
    '.png' : 'image/png'
}

function webserver(req, res) {
    //if req route is route route '/' then load 'index.htm' or else
    //load the request file(s) //uses url

    let baseURI = url.parse(req.url);
    let filepath = __dirname + (baseURI.pathname === '/' ? '/index.htm' : baseURI.pathname);

    //check if the requested file is accessible or not //uses fs
    fs.access(filepath, fs.F_OK, error => {
        console.log('Serving: ', filepath);
        if(!error) {
            //read and serve file
            fs.readFile(filepath, (error, content) =>{
                if(!error) {
                    //figure out content types
                    let contentType = mimes[path.extname(filepath)];
                    //serve the file from the buffer
                    res.writeHead(200, {'content-type': contentType});
                    res.end(content, 'utf-8');
                } else {
                    res.writeHead(500);
                    res.end('The server could not read the file requested')
                }
            });
        } else {
            //serve a 404
            res.writeHead(404);
            res.end('content not found');
        }
    });
}

http.createServer(webserver).listen(3000, () => {
    console.log('webserver running on 3000');
});
