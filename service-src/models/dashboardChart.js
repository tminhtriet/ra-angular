const connectDB = require("../config/conDatabase");
const Sequelize = require('sequelize');

module.exports.loadDashboard1 = function(month, year, arCode, callback){
    connectDB.query('select * from sql_sum_fare_other_pax_count_coupon_fare(:m, :y, :c);', {
        replacements: { m: month, y: year, c: arCode}, type: Sequelize.QueryTypes.SELECT}
    ).then(rs => {
        callback(null, rs);
    })
}