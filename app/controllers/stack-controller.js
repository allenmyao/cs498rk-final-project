var models = require('./../models');
var Stack = models.Stack;
var Bookmark = models.Bookmark;


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
    Stack.findById(id)
        .exec(function(err, stack) {
            callback(err, stack);
        });
};

exports.updateStack = function(id, data, callback) {
    Stack.findOneAndUpdate(id, data, function(err, stack) {
        callback(err, stack);
    });
};

exports.deleteStack = function(id, callback) {
    Stack.findById(id, function(err, stack) {
        if (!err) {
            stack.remove(function(err, removed) {
                if (!err) {
                    Bookmark.remove({
                        "stack_id": id
                    }, function(err, num_removed) {
                        callback(err, num_removed, "Failed to remove the bookmarks in the deleted the stack.");
                    });
                } else {
                    callback(err, bookmark, "Failed to delete the stack.");
                }
            });
        } else {
            callback(err, bookmark, "Failed to find the stack to delete");
        }
    });
};
