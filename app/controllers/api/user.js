var userController = require('./../user');


exports.getUsers = function(req, res, next) {
    userController.getUsers(req.query, function(users) {
        res.json({
            message: typeof users
        });
    });
};

exports.postUsers = function(req, res, next) {
    userController.createUser(req.body, function(newUser) {
        res.json({
            message: typeof newUser
        });
    });
};

exports.getUser = function(req, res, next) {
    userController.getUser(req.params.user_id, function(user) {
        res.json({
            message: typeof user
        });
    });
};

exports.putUser = function(req, res, next) {
    userController.updateUser(req.params.user_id, req.body, function(user) {
        res.json({
            message: typeof user
        });
    });
};

exports.deleteUser = function(req, res, next) {
    userController.deleteUser(req.params.user_id, function(user) {
        res.json({
            message: typeof user
        });
    });
};