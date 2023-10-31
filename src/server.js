const { Console } = require('console')
const express = require('express')
require('dotenv').config()

console.log(">>>>check env", process.env)

//import express
const app = express()
const port = process.env.PORT || 8080// hardcode
const path = require('path')
const hostname = 'localhost'
// config termplate engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// config static file

//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
//Khai bao route

app.get('/', (req, res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejs chua ahahaha')
})

//check duonbg link vidu nhu la http/8080/abc

app.get('/abc', (req, res) => {
    //res.send('Check abc')
    res.render('sample.ejs')
})

app.get('/checkthehtml', (req, res) => {
    res.send('<h1>HTML OKE NHE</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})


// template engine (VIEW)

