var models = require('./../../models');
var User = models.User;
var UserController = require('./../user');


exports.getUsers = function(req, res, next) {
    var users = UserController.getUsers(req.query, function(users) {
        res.json({
            message: typeof users
        });
    });
};

exports.postUsers = function(req, res, next) {
    var newUser = UserController.createUser(req.body, function(users) {
        res.json({
            message: typeof users
        });
    });
};

exports.getUser = function(req, res, next) {
    UserController.getUser(req.params.user_id, function(user) {
        res.json({
            message: typeof user
        });
    });
};

exports.putUser = function(req, res, next) {
    UserController.updateUser(req.params.user_id, req.body, function(user) {
        res.json({
            message: typeof user
        });
    });
};

exports.deleteUser = function(req, res, next) {
    UserController.deleteUser(req.params.user_id, function(user) {
        res.json({
            message: typeof user
        });
    });
};