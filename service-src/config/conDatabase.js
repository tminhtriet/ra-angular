const Sequelize = require("sequelize");
const config = require("./config-info");

const connect = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.typeDatabase,

    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
});

connect.authenticate().then(() => {
    console.log('Connect successfull.');
}).catch(err => {
    console.log('Unable to connect to the database: ' + err);
});

module.exports = connect;