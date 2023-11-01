// phục vụ chức năng render các chức năng của web
//Khai bao route
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejs chua ahahaha')
})

//check duonbg link vidu nhu la http/8080/abc

router.get('/abc', (req, res) => {
    //res.send('Check abc')
    res.render('sample.ejs')
})

router.get('/checkthehtml', (req, res) => {
    res.send('<h1>HTML OKE NHE</h1>')
})





module.exports= router; // export default
