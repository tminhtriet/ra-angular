const mysql = require("mysql");
const config = require("./database");

//Connect to my sql
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

module.exports = con;