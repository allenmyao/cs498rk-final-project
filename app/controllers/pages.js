//var passport = require('passport');
var User = require('./user');


exports.getIndex = function(req, res, next) {
    res.sendFile('/public/index.html');
};

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

    User.createUser(userData, function(user) {
        req.login(user);
        res.status(200).send(user);
        // passport.authenticate('local', function(err, user) {
        //     if (err)
        //         return next(err);
        //     // if (!user)
        //     //     res.send(404, 'Incorrect username or password.');
        //     else if (user)
        //         res.redirect('/profile/' + user.username);
        // })(req, res, next);
    });
};

exports.postLogout = function(req, res, next) {
    req.logout();
    res.status(200);
};