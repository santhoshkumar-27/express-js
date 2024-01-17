const express = require('express')
const path = require('path');
const app = express()

// for serving static contents for client side
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'))
});

app.all('*', (req, res) => {
    res.writeHead(404, {
        "content-type": 'text/html'
    })
    res.write('<h2> not found </h2>')
    res.end()
})

app.listen(5000, () => {
    console.log('server is running on port 5000')
})