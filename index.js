const express = require('express');
let data = require('./mock-data/data');
const path = require('path')
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
// static assets

app.use('/', express.static(path.join(__dirname, '/public')))

// parse the form data
// app.use(express.urlencoded({extended: false}))

// parse the body data
app.use(express.json())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

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

// create a entry data
app.post('/api/data', (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(500).json({
            message: 'failed'
        })

    }
    const { id, userId } = data[data.length - 1]
    const preparedArray = {
        title, body,
        id: id + 1,
        userId
    };
    if (preparedArray) {
        data.push(preparedArray)
        res.json({ data: preparedArray });
    } else {
        res.status(500).json({
            message: 'failed'
        })
    }
})

// update a data using put method
app.put('/api/data/:id', (req, res) => {
    const { id: requestedId } = req.params
    let findedDataIndex = data.findIndex((list) => list.id == requestedId);
    if (findedDataIndex < 0) {
        return res, status(401).json({
            message: 'not found'
        })
    }
    const { title, body } = req.body;
    let findedData = data[findedDataIndex];
    findedData = {
        ...findedData,
        title: title || findedData.title,
        body: body || findedData.body,
    }
    try {
        data[findedDataIndex] = findedData;
        res.json({ data: findedData, message: 'success' });
    } catch (e) {
        res.status(500).json({
            message: 'failed to updated'
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