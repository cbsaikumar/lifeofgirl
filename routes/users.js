const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const config = require('../config/database');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        usertype: req.body.usertype
    });

    User.addUser(newUser, (err, user) =>{
        if(err){
            res.json({success: false, msg:'failed to register'});
        }
        else{
            res.json({success: true, msg:'user registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'user not found!'});
        }
        
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 3600 //1hour
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user:{
                        id: user._id,
                        username: user.username,
                        usertype: user.usertype
                    }
                });
            }
            else{
                return res.json({success:false, msg: 'wrong password!'});
            }
        })
    });
});


//Profile
router.get('/profile',passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;