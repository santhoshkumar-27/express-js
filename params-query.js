const express = require('express');
const data = require('./mock-data/data')
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    // res.json(data)
    res.send(`
        <h1>header</h1>
        <a href='/api/data'>data</a>
    `)
})

app.get('/api/data', (req, res) => {
    // don't send the all the data for a list
    // res.json(data);

    res.json(data.map(({ userId, id, title }) => ({ userId, id, title })))
})

// route parameters
app.get('/api/data/:id', (req, res) => {
    const { id: requestedId } = req.params
    const singleData = data.find((list) => list.id == requestedId);
    if (singleData) {
        res.json(singleData);
    } else {
        res.json({
            message: 'not found'
        })
    }
})


// complex route parameters
app.get('/api/data/:id/reviews/:reviewId', (req, res) => {
    console.log('req.params', req.params)
    res.json({
        message: 'not found'
    })
})

// query string parametes or url string parameters
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    let { search, limit } = req.query
    let filteredArray = JSON.parse(JSON.stringify(data)) || [];

    if (search) {
        search = search.toLowerCase()
        filteredArray = (filteredArray|| []).filter((list) => list.title.toLowerCase().includes(search) ||
        list.body.toLowerCase().includes(search))
    }

    if (limit) {
        filteredArray = [... filteredArray.slice(0, limit)]
    }

    if (!filteredArray.length) {
        return res.json({
            lists: filteredArray
        })
    }
    return res.json({
        lists: filteredArray
    })
});


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