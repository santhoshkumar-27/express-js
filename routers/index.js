const express = require('express')
const router = express.Router()
const post = require('./post');
const auth = require('./auth')



router.use('/data', post);
router.use('/auth', auth);


module.exports = router;