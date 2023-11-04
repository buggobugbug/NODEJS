// // dùng lại các connection và code đã dùng
require('dotenv').config();
const mysql = require('mysql2');


// // TEST connection thử kết nối cơ sở dữ liệu
// // create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


module.exports= connection;