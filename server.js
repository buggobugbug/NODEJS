const express = require('express')

//import express
const app = express()
const port = 8080

//Khai bao route

app.get('/', (req, res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejschua')
})

//check duonbg link vidu nhu la http/8080/abc

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/checkthehtml', (req, res) => {
    res.send('<h1>HTML OKE NHE</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})