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
    
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // lấy data từ trên ứng dụng xuống

    console.log('>>>>email= ', email, 'Name = ', name, 'city =', city )
    // res.send('creat a new user')

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user succeed, OK')
        }
    );
    


}

module.exports= {
    getHomepage, getABC, gethoidanit, postCreatuser
}