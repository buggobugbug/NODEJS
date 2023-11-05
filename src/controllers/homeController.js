const connection = require("../config/database")



// Gửi yêu cầu trả về 1 phản hồi cho người dùng
const getHomepage = (req , res) => {
   return res.render('homepage.ejs');
   
}
const getABC = (req, res) => {
    res.send('check ABC')
}
const gethoidanit = (req, res) => {
    res.render('sample.ejs')
}

const postCreatuser = (req, res) => {
    console.log('>>>>req.body', req.body)
    res.send('creat a new user')
}

module.exports= {
    getHomepage, getABC, gethoidanit, postCreatuser
}