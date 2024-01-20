const express = require('express');
const data = require('./mock-data/data')
const app = express();
const port = 5000;


app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})