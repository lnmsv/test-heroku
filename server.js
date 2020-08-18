'use srtict'

const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, responce) {
    console.log(request.method, request.url);
    if (request.url == '/style.css') {
        const css = fs.readFileSync('style.css', 'utf8')
        responce.end(css);
    } else {
        const html = fs.readFileSync('index.html', 'utf8')
        responce.end(html);
    }
    const text = fs.readFileSync('index.html', 'utf8')
    responce.end(text);
});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('RUN SERVER RUN');