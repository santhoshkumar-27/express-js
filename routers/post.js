const express = require('express');
let data = require('../mock-data/data');
const routerPost = express.Router();
const controller = require('../controllers/post')

// routerPost.get('/', controller.getEntries)
// routerPost.get('/:id', controller.getEntryById)
// routerPost.post('/', controller.createEntry)
// routerPost.put('/:id', controller.updateEntryById)
// routerPost.delete('/:id', controller.deleteEntryById)


routerPost.route('/')
.get(controller.getEntries)
.post(controller.createEntry);

routerPost.route('/:id')
.get(controller.getEntryById)
.put(controller.updateEntryById)
.delete(controller.deleteEntryById);


module.exports = routerPost