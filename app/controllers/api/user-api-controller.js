var userController = require('./../user-controller');


exports.getUsers = function(req, res, next) {
    userController.getUsers(req.query, function(err, users) {
        if (err) {
            res.json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.json({
                message: 'Successfully retrieved users',
                data: users
            });
        }
    });
};

exports.postUsers = function(req, res, next) {
    userController.createUser(req.body, function(err, newUser) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.status(201).json({
                message: 'Successfully created user',
                data: newUser
            });
        }
    });
};

exports.getUser = function(req, res, next) {
    userController.getUser(req.params.user_id, function(err, user) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved user',
                data: user
            });
        }
    });
};

exports.putUser = function(req, res, next) {
    userController.updateUser(req.params.user_id, req.body, function(err, user) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.status(200).json({
                message: 'Successfully updated user',
                data: user
            });
        }
    });
};

exports.deleteUser = function(req, res, next) {
    userController.deleteUser(req.params.user_id, function(err, user) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.status(200).json({
                message: 'Successfully deleted user',
                data: user
            });
        }
    });
};