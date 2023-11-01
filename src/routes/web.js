// phục vụ chức năng render các chức năng của web
//Khai bao route
const express = require('express');
const router = express.Router();

// nói với express thak nào chịu trách nhiệm xử lí khi user gửi yêu cầu
const {getHomepage, getABC, gethoidanit} = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoidanithuychuabietcode', gethoidanit)


//check duonbg link vidu nhu la http/8080/abc

router.get('/abc', (req, res) => {
    //res.send('Check abc')
    res.render('sample.ejs')
})

router.get('/checkthehtml', (req, res) => {
    res.send('<h1>HTML OKE NHE</h1>')
})






module.exports= router; // export default
