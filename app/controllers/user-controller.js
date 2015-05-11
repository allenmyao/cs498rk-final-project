var models = require('./../models');
var User = models.User;
var Stack = models.Stack;

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
        if (!err) {
            // create the root stack
            var rootStack = new Stack({
                "owner_id": user._id,
                "name": "Root stack for " + user.username
            });
            rootStack.save(function(err, stack) {
                if (!err) {
                    // update user's rootStack field
                    user["rootStack"] = stack._id;
                    user.save(function(err, user) {
                        callback(err, user);
                    });
                } else {
                    callback(err, user, "Could not create the root stack at this time");
                }
            });
        } else {
            callback(err, user);
        }
    });
};

exports.getUser = function(id, callback) {
    User.findById(id)
        .exec(function(err, user) {
            callback(err, user);
        });
};

exports.updateUser = function(id, data, callback) {
    User.findOneAndUpdate({ _id: id }, data, function(err, user) {
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
