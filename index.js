const express = require('express');
const data = require('./mock-data/data')
const { logger, authenticate } = require('./middleware')
const app = express();
const port = 5000;

// app.use('/api', logger) // for specific route start path apply for middle wares

app.use([logger, authenticate])

app.get('/', (req, res) => {
    // res.json(data)
    // console.log(req.method, req.url, new Date().getFullYear()); // need to console every incoming req
    res.send(`
        <h1>header</h1>
    `)
})
app.get('/api/view', (req, res) => {
    // res.json(data)
    res.send(`
        <h1>About</h1>
    `)
})
app.get('/api/data', (req, res) => {
    // res.json(data)
    res.send(`
        <h1>data</h1>
    `)
})
app.get('/about', (req, res) => {
    // res.json(data)
    res.send(`
        <h1>About</h1>
    `)
})
app.all('*', (req, res) => {
    res.writeHead(404, {
        "content-type": 'text/html'
    })
    res.write('<h2> not found </h2>')
    res.end()
})
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})