var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session')
var passport = require('passport');


// load config files
var database = require('./app/config/database');
var settings = require('./app/config/settings');


// load all models
var models = require('./app/models');

var app = express();

// connect to the database
mongoose.connect(database.url, function(err) {
    if (err) console.log('Failed to connect to database: ' + database.databaseName);
    else console.log('Connected to database: ' + database.databaseName);
});


// FUTURE: uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: settings.sessionSecret
}));


// use passport package for authentication
app.use(passport.initialize());
app.use(passport.session());


// use public folder (for static files)
app.use(express.static(__dirname + '/public'));


// load routes
require('./app/routes')(app);


// error handlers
if (settings.env === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500).json({
            message: err.message,
            error: err
        });
    });
} else {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500).json({
            message: err.message,
            error: {}
        });
    });
}


// run the server
console.log("Express server running on " + settings.port);
app.listen(settings.port);

module.exports = app;