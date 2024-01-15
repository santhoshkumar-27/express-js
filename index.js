const http = require('http');
const { readFileSync } = require('fs');

const homepage = readFileSync('./view/index.html');
const homeStyle = readFileSync('./view/index.css');
const homeIndex = readFileSync('./view/browser.js');

const server = http.createServer((req, res) => {
    // console.log(req)

    if (req.url === '/') {
        res.writeHead(200, {
            "content-type": 'text/html'
        })
        res.write(homepage)
        res.end()
    } else if (req.url === '/index.css') {
        res.writeHead(200, {
            "content-type": 'text/css'
        })
        res.write(homeStyle)
        res.end()
    } else if (req.url === '/browser.js') {
        res.writeHead(200, {
            "content-type": 'text/javascript'
        })
        res.write(homeIndex)
        res.end()
    } else if (req.url === '/about') {
        res.writeHead(200, {
            "content-type": 'text/html'
        })
        res.write('<h2> about </h2>')
        res.end()
    } else {
        res.writeHead(404, {
            "content-type": 'text/html'
        })
        res.write('<h2> not found </h2>')
        res.end()
    }
});


server.listen(5000)