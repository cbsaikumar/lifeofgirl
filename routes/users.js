const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const config = require('../config/database');

const User = require('../models/user');
const Profile = require('../models/profile');

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


//Get profile
router.get('/profile',passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //console.log("username", req.headers.username);
    Profile.getProfileByUsername(req.headers.username, (err, profile) =>{
        if(err){
            return res.json({success:false, msg: err});
        }
        if(!profile){
            return res.json({success:false, msg: 'user not found'});
        }
        if(profile){
        
            res.json({success: true, user:profile});
        }
    });
});

//Register Profile
router.post('/profile', (req, res, next) => {
    // res.json({user: req.user});
    let newProfile = new Profile({
        usertype : req.body.usertype,
        username : req.body.username,
        name : req.body.name,
        dob : req.body.dob, 
        aadhaar : req.body.aadhaar,
        mobile : req.body.mobile,
        college : req.body.college,
        specialization : req.body.specialization,
        year_of_study : req.body.year_of_study,
        cgpa : req.body.cgpa,
        dream_job : req.body.dream_job,

        affiliation : req.body.affiliation,
        position_of_responsibility : req.body.position_of_responsibility,
        association_with_log : req.body.association_with_log,
        log_id : req.body.log_id,
        log_objective_desc : req.body.log_objective_desc
    });
    
    Profile.addProfile(newProfile, (err, user) =>{
        console.log("new proile", newProfile);
        if(err){
            console.log("err", err);
            res.json({success: false, msg:'failed to register profile'});
        }
        else{
            res.json({success: true, msg:'profile registered successfully'});
        }
    });
});

module.exports = router;