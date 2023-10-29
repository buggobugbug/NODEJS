const express = require('express')

//import express
const app = express()
const port = 8080
const path = require('path')

// config termplat engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Khai bao route

app.get('/', (req, res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejschua')
})

//check duonbg link vidu nhu la http/8080/abc

app.get('/abc', (req, res) => {
    //res.send('Check abc')
    res.render('sample.ejs')
})

app.get('/checkthehtml', (req, res) => {
    res.send('<h1>HTML OKE NHE</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// template engine (VIEW)

