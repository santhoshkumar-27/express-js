const express = require('express')
const { readFileSync } = require('fs');


const app = express()

const homepage = readFileSync('./view/index.html');
const homeStyle = readFileSync('./view/index.css');
const homeIndex = readFileSync('./view/browser.js');



app.get('/', (req, res) => {
    res.writeHead(200, {
        "content-type": 'text/html'
    })
    res.write(homepage)
    res.end()
});
app.get('/index.css', (req, res) => {
    res.writeHead(200, {
        "content-type": 'text/css'
    })
    res.write(homeStyle)
    res.end()
});
app.get('/browser.js', (req, res) => {
    res.writeHead(200, {
        "content-type": 'text/javascript'
    })
    res.write(homeIndex)
    res.end()
});
app.get('/about', (req, res) => {
    res.writeHead(200, {
        "content-type": 'text/html'
    })
    res.write('<h2> about </h2>')
    res.end()
})
app.all('*', (req, res) => {
    res.writeHead(404, {
        "content-type": 'text/html'
    })
    res.write('<h2> not found </h2>')
    res.end()
})
app.listen(5000, () => {
    console.log('server is running 5000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

