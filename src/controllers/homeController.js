
// Gửi yêu cầu trả về 1 phản hồi cho người dùng
const getHomepage = (req , res) => {
    res.send('Hello World! hoi Huy thu xem co  hoc nodejs chua ahahaha')
}
const getABC = (req, res) => {
    res.send('check ABC')
}
const gethoidanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports= {
    getHomepage, getABC, gethoidanit
}