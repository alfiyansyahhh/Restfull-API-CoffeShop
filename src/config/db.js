// const Connection = require("mysql2/typings/mysql/lib/Connection");
// bisa tergubung ke mysql2
const mysql = require('mysql2')
// require('dotenv').config()
const {db_username, db_password} = require('../helpers/env')

// untuk mengkoneksikan backend dengan mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: db_username,
    password: db_password,
    database: 'db_coffee-shop'
})
// unutk mengecek koneksi
db.connect((err) => {
    if(err){
        console.log("error connection" + err)
    }else{
        console.log("connection succes")
    }
})


module.exports = db