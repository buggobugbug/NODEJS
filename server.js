const express = require('express')

//import express
const app = express()
const port = 8080

//Khai bao routes

app.get('/', (req, res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejschua')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})