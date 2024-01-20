const express = require('express');
const data = require('./mock-data/data')
const app = express();
const port = 5000;

// read data
app.get('/api/data', (req, res) => {

    res.json(
        {
            data
        }
    )
})
// read data by id
app.get('/api/data/:id', (req, res) => {
    const { id: requestedId } = req.params
    const singleData = data.find((list) => list.id == requestedId);
    if (singleData) {
        res.json({ data: singleData });
    } else {
        res.json({
            message: 'not found'
        })
    }
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