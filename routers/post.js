const express = require('express');
let data = require('../mock-data/data');
const routerPost = express.Router();
const controller = require('../controllers/post')

// read data
routerPost.get('/', controller.getEntries)
// read data by id
routerPost.get('/:id', controller.getEntryById)

// create a entry data
routerPost.post('/', controller.createEntry)

// update a data using put method
routerPost.put('/:id', controller.updateEntryById)

// Delete the data
routerPost.delete('/:id', controller.deleteEntryById)


module.exports = routerPost