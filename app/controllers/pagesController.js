//var passport = require('passport');
var User = require('./userController');


exports.getLoggedIn = function(req, res, next) {
    res.send(req.isAuthenticated() ? req.user : 0);
};

exports.postLogin = function(req, res, next) {
    res.send(req.user);
};

exports.postSignup = function(req, res, next) {
    if (!req.body.username)
        return res.status(400).send('Username cannot be blank.');

    if (!req.body.email)
        return res.status(400).send('Email cannot be blank.');

    if (!req.body.password)
        return res.status(400).send('Password cannot be blank.');

    if (req.body.password !== req.body.confirmPassword)
        return res.status(400).send('Passwords do not match.');

    var userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    User.createUser(userData, function(err, user) {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: err.message,
                error: err
            })
        } else {
            console.log(user);
            req.login(user, function(err) {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        message: err.message,
                        error: err
                    });
                }
                else res.status(200).send(user);
            });
        }
    });
};

exports.postLogout = function(req, res, next) {
    req.logout();
    res.status(200).json({
        message: 'Successfully logged out'
    });
};