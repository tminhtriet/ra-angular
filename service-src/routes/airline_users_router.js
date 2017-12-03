const express = require("express");
const router = express.Router();
const airlineUsers = require("../models/airlineUsers");
const conDB = require("../config/conDatabase");

const modelAirlineUser = require("../models/airlineUsers");

//Login
router.post('/findUserByName', (req, res, next) => {

    modelAirlineUser.findUserByName(req.body.username, req.body.password, (err, result) => {
        var rs = "";
        if(err)
            rs = "User not found";
        else
            rs = result;

        res.send(rs);
    });
});

module.exports = router;