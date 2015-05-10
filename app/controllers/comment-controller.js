var models = require('./../models');
var Comment = models.Comment;


exports.getComments = function(params, callback) {
    Comment
        .find(params.where)
        .select(params.select)
        .sort(params.sort)
        .skip(params.skip)
        .limit(params.limit)
        .exec(function(err, comments) {
            callback(err, params.count ? comments.length : comments);
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