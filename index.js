const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)

    if (req.url === '/') {
        res.writeHead(200, {
            "content-type": 'text/html'
        })
        res.write('<h2> hello world </h2>')
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