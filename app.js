const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();


app.use(cors());

//Connect to Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', ()=> {
    console.log('Connected to Database'+config.database);
});
mongoose.connection.on('error', (err)=> {
    console.log('error in connecion'+err);
});

const users = require('./routes/users')


//Port number
//const port = process.env.PORT || 8080;
const port = 5000;

//Body parser Middleware
app.use(bodyParser.json());


//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//Users Route
app.use('/users', users)

//Index route
app.get("/", (req, res) => {
    res.send("Please use api/login for the login");
})

//All routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


//Start router
app.listen(port, ()=> {
    console.log("server started on port", port);
});