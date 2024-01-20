const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear());
    // console.log(next)
    // res.send('testing') // unless you send the response, we need to pass to the next middle ware
    next()
}

const authenticate = (req, res, next) => {
    console.log('authenticated')
    next()
}

module.exports = { logger, authenticate }