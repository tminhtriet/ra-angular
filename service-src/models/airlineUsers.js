const connectDB = require("../config/conDatabase");
const Sequelize = require('sequelize');
const bcry = require("bcryptjs");

const airlineUser = connectDB.define('alUser', {
    user_id:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    password:{
        type: Sequelize.STRING
    },
    airline_code:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    profile: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: "airline_user"
});

module.exports = airlineUser;

module.exports.findUserByName = function(us, callback){
    airlineUser.findAll({
        where: {user_id: us}
    }).then(airlineUser => {
        const jsonrs = JSON.stringify(airlineUser);

        if(jsonrs.length == 2){
            callback(null, null);
        } else {
            callback(null, airlineUser);
        }
    }).catch(error => {
        callback(error, null);
    });
}

module.exports.insert = function(newUser, callback){
    bcry.genSalt(10, (err, salt) => {
        bcry.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(function(){
                callback(null, "S");
            }).catch(error => {
                callback(error, "F");   
            });
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    // bcry.compare(candidatePassword, hash, (err, isMatch) => {
    //     if(err) throw callback(err, false);
    //     callback(null, isMatch);
    // });
    if(candidatePassword == hash.trim()){
        callback(null, true);
    } else {
        callback(null, false);
    }
}