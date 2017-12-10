const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const modelAirlineUser = require("../models/airlineUsers");
const config = require("../config/config-info");

//Login
router.post('/findUserByName', (req, res, next) => {

    modelAirlineUser.findUserByName(req.body.username, (err, rs) => {
        if(err != null){
            res.json({success: false, msg: "Server error: " + err});
        } else if(rs == null){
            res.json({success: false, msg: "User not found: " + err});
        } else{
            // res.json(rs);
            var user = rs[0].dataValues;
            modelAirlineUser.comparePassword(req.body.password, user.password, (err, isMatch) => {
                if(isMatch){
                    const token = jwt.sign(user, config.secretKey, {
                        expiresIn: 604800
                    });

                    res.json({
                        success: true,
                        token: "JWT: " + token,
                        user: {
                            id: user.id,
                            username: user.username,
                            name: user.name
                        }
                    });
                } else {
                    res.json({success: false, msg: "Wrong password"});
                }
            });
        }
    });

});

router.post('/insert', (req, res, next) => {

    modelAirlineUser.findUserByName(req.body.username, (err, user) => {
        if(err != null){
            res.json({success: false, msg: "Server error: " + err});
        } else if(user != null){
            res.json({success: false, msg: "User exists"});
        } else {
            let newUser = new modelAirlineUser({
                username: req.body.username,
                password: req.body.password,
                name: req.body.name
            })
        
            modelAirlineUser.insert(newUser, (err, result) => {
                (err) ? res.json({success: false, msg: 'Failed to register user'}) : res.json({success: true, msg: 'User registered'});
            });
            // res.json({success: true, msg: 'User registered'});
        }
    });
});

module.exports = router;