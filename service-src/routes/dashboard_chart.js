const express = require("express");
const router = express.Router();

const dashboardChart = require("../models/dashboardChart");
const config = require("../config/config-info");

router.post('/getBody', (req, res, next) => {
    dashboardChart.loadDashboard1(req.body.month, req.body.year, req.body.airCode, (err, rs) => {
        res.json({success: true, result: rs});
    });
});

module.exports = router;