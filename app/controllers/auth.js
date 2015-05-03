var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var models = require('./../models');
var User = models.User;


passport.serializeUser(function(user, callback) {
    callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
        callback(err, user);
    });
});

passport.use(new Strategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username, password, callback) {
    User.findOne({ username: username }, function(err, user) {
        if (err)
            return callback(err);

        if (!user)
            return callback(err, false);

        user.verifyPassword(password, function(error, isMatch) {
            if (err)
                return callback(err);

            if (!isMatch)
                return callback(null, false);

            return callback(null, user);
        });
    });
}));

exports.isAuthenticated = passport.authenticate('local', { session: true });

exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({
            error: 'Not logged in'
        });
    }
};