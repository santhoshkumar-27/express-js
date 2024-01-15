const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)

    res.writeHead(200, {
        "content-type" : 'text/html'
    })
    res.write('<h2> hello world </h2>')
    res.end()
});


server.listen(5000)