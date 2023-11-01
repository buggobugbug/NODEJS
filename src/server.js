const { Console } = require('console')
const express = require('express')
require('dotenv').config()
console.log(">>>>check env", process.env)
const configViewEngine = require('./config/newengine');
const webRouter = require('./routes/web')
//import express
const app = express()
const port = process.env.PORT || 8080// hardcode
const hostname = 'localhost'
// config termplate engine

configViewEngine(app);
// config static file

// Khai báo routes

app.use('/v1', webRouter);
app.use('/v1', webRouter);



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

// template engine (VIEW)

