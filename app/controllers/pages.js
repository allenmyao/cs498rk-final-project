//var passport = require('passport');
var User = require('./user');


exports.getIndex = function(req, res, next) {
    // res.sendfile('./public/index.html');
    var data = {
        title: 'Homepage'
    };
    res.render('index', { data: data }); // renders index view
};

exports.getLogin = function(req, res, next) {
    res.render('login');
};

exports.postLogin = function(req, res, next) {
    // res.redirect('/profile/' + req.user.username);
    next();
};

exports.getSignup = function(req, res, next) {
    res.render('signup');
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
        next();
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

exports.getProfile = function(req, res, next) {
    console.log(req.user);
    res.render('profile', { data: {
        user: req.user
    }});
};