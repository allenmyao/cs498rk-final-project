var models = require('./../models');
var User = models.User;


exports.getUsers = function(data, callback) {
    User.find(data)
        .exec(function(err, users) {
            if (err) callback(err);
            else callback(users);
        });
};

exports.createUser = function(data, callback) {
    var user = new User({
        username: data.username,
        email: data.email,
        password: data.password
    });
    console.log('createUser: pre-save');
    user.save(function(err) {
        if (err) callback(err);
        else callback(user);
    });
};

exports.getUser = function(id, callback) {
    User.findById(id)
        .exec(function(err, user) {
            if (err) callback(err);
            else callback(user);
        });
};

exports.updateUser = function(id, data, callback) {
    User.findById(id)
        .update(data, { overwrite: true })
        .exec(function(err, user) {
            if (err) callback(err);
            else callback(user);
        });
};

exports.deleteUser = function(id, callback) {
    User.findById(id)
        .remove()
        .exec(function(err, user) {
            if (err) callback(err);
            else callback(user);
        });
};