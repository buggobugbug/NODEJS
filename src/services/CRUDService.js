const connection = require('../config/database');
const getALLusers  = async() =>{

    let [result, fields] = await connection.query('select * from Users')
    return result;
}


module.exports = {
    getALLusers
}


// chịu trách nhiệm lấy data