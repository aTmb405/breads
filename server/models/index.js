require("dotenv").config();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password: process.env.DBPASSWORD,
    database: process.env.DB
});

module.exports.connection = connection;