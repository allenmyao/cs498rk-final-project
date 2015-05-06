var models = require('./../models');
var Stack = models.Stack;


exports.getStacks = function(callback) {
    Stack
        .find()
        .exec(function(err, stacks) {
            callback(err, stacks);
        });
};

exports.createStack = function(data, callback) {
    var newStack = new Stack(data);
    newStack.save(function(err, stack) {
        callback(err, stack);
    });
};

exports.getStack = function(id, callback) {
    Stack
        .findById(id)
        .exec(function(err, stack) {
            callback(err, stack);
        });
};

exports.updateStack = function(id, data, callback) {
    Stack
        .findById(id)
        .update(data)
        .exec(function(err, stack) {
            callback(err, stack);
        });
};

exports.deleteStack = function(id, callback) {
    Stack
        .findById(id)
        .remove()
        .exec(function(err, stack) {
            callback(err, stack);
        });
};