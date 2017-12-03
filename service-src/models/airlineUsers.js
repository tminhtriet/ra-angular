const connectDB = require("../config/conDatabase");

module.exports.findUserByName = function(username, password, callback){
    var sql = "select * from airline_user where username = '" + username + "'";

    connectDB.query(sql, function(err, result){
        if(err) throw callback(err, null);
        if(result.length == 0) throw callback(true, null);
        callback(null, result[0]);
    });
}