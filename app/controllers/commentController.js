var models = require('./../models');
var Comment = models.Comment;


exports.getComments = function(callback) {
    Comment
        .find()
        .exec(function(err, comments) {
            callback(err, comments);
        });
};

exports.createComment = function(data, callback) {
    var newComment = new Comment(data);
    newComment.save(function(err, comment) {
        callback(err, comment);
    });
};

exports.getComment = function(id, callback) {
    Comment
        .findById(id)
        .exec(function(err, comment) {
            callback(err, comment);
        });
};

exports.updateComment = function(id, data, callback) {
    Comment
        .findById(id)
        .update(data)
        .exec(function(err, comment) {
            callback(err, comment);
        });
};

exports.deleteComment = function(id, callback) {
    Comment
        .findById(id)
        .remove()
        .exec(function(err, comment) {
            callback(err, comment);
        });
};