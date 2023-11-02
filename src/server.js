const { Console } = require('console')
const express = require('express')
require('dotenv').config()
console.log(">>>>check env", process.env)
const configViewEngine = require('./config/newengine');
const webRouter = require('./routes/web')
//import express
const app = express()
const port = process.env.PORT || 8080// hardcode
const hostname = 'localhost'
const mysql = require('mysql2')
// config termplate engine

configViewEngine(app);
// config static file

// Khai báo routes

app.use('/v1', webRouter);
app.use('/v1', webRouter);

// TEST connection thử kết nối cơ sở dữ liệu
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // truyền port chạy trên cổng 3307 thay vì chạy trên cổng 3306
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

// kết nối từ nodejs chọc xuống database để lấy dữ liệu lên

// simple query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>>results= ", results); // results contains rows returned by server
        console.log(">>>>fields= ",fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

// template engine (VIEW)

