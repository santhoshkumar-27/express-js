const express = require('express');
const path = require('path')
const app = express();
const port = 5000;
const indexRoute = require('./routers/index')
const bodyParser = require('body-parser')
// static assets

app.use('/', express.static(path.join(__dirname, '/public')))

// parse the form data
app.use(express.urlencoded({extended: false}))

// parse the body data
app.use(express.json())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use('/api', indexRoute)

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