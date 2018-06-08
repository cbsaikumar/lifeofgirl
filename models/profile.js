const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const ProfileSchema = mongoose.Schema({
    usertype : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    aadhaar : {
        type: String
    },
    mobile : {
        type: String,
        required: true
    },
    college : {
        type: String       
    },
    specialization : {
        type: String       
    },
    year_of_study : {
        type: String       
    },
    cgpa : {
        type: String       
    },
    dream_job : {
        type: String       
    },
    affiliation : {
        type: String       
    },
    position_of_responsibility : {
        type: String       
    },
    association_with_log : {
        type: String       
    },
    log_id : {
        type: String       
    },
    log_objective_desc : {
        type: String       
    }
});

const Profile = module.exports = mongoose.model('Profile', ProfileSchema);

module.exports.getProfileById = function(id, callback){
    Profile.findById(id, callback);
};

module.exports.getProfileByUsername = function(username, callback){
    const query = {username: username};
    Profile.findOne(query, callback);
};


module.exports.addProfile = function(newProfile, callback){
    newProfile.save(callback);
};



