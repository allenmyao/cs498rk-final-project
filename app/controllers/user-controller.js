var models = require('./../models');
var User = models.User;


exports.getUsers = function(data, callback) {
    User.find(data)
        .exec(function(err, users) {
            callback(err, users);
        });
};

exports.createUser = function(data, callback) {
    var newUser = new User({
        username: data.username,
        email: data.email,
        password: data.password
    });
    newUser.save(function(err, user) {
        callback(err, user);
    });
};

exports.getUser = function(id, callback) {
    User.findById(id)
        .exec(function(err, user) {
            callback(err, user);
        });
};

exports.updateUser = function(id, data, callback) {
    User.findById(id)
        .update(data, { overwrite: true })
        .exec(function(err, user) {
            callback(err, user);
        });
};

exports.deleteUser = function(id, callback) {
    User.findById(id)
        .remove()
        .exec(function(err, user) {
            callback(err, user);
        });
};