const express = require('express');
const routerLogin = express.Router();

// read data
routerLogin.get('/login', (req, res) => {

    res.json(
        {
            message: 'successfully logined'
        }
    )
})

module.exports = routerLogin;