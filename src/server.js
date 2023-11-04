const { Console } = require('console');
const express = require('express');
require('dotenv').config();
console.log(">>>>check env", process.env);
const configViewEngine = require('./config/newengine');
const webRouter = require('./routes/web');
// const mysql = require('mysql2');
//import express
const connection = require('./config/database')
const app = express();
const port = process.env.PORT || 8888;// hardcode
const hostname = 'localhost';

// config termplate engine

configViewEngine(app);
// config static file

// Khai báo routes

app.use('/v1', webRouter);


// //test connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     password: '123456',
//     database: 'hoidanit'
// });


// kết nối từ nodejs chọc xuống database để lấy dữ liệu lên

// simple query
connection.query(
    `select * from Users`,
    function (err, results, fields) {
        console.log(">>>>results= ", results); // results contains rows returned by server
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

// template engine (VIEW)
