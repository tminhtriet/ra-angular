const connectDB = require("../config/conDatabase");
const Sequelize = require('sequelize');
const bcry = require("bcryptjs");

const airlineUser = connectDB.define('alUser', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: "airline_user"
});

module.exports = airlineUser;

module.exports.findUserById = function(id, callback){
    airlineUser.findById(id).then(function(user){
        callback(null, user);
    });
}

module.exports.findUserByName = function(us, callback){
    airlineUser.findAll({
        where: {username: us}
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
                throw callback(null, "S");
            }).catch(error => {
                callback(error, "F");
            });
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcry.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw callback(err, false);
        callback(null, isMatch);
    })
}