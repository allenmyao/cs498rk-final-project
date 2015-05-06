var models = require('./../models');
var Bookmark = models.Bookmark;


exports.getBookmarks = function(callback) {
    Bookmark
        .find()
        .exec(function(err, bookmarks) {
            callback(err, bookmarks);
        });
};

exports.createBookmark = function(data, callback) {
    var newBookmark = new Bookmark(data);
    newBookmark.save(function(err, bookmark) {
        callback(err, bookmark);
    });
};

exports.getBookmark = function(id, callback) {
    Bookmark
        .findById(id)
        .exec(function(err, bookmark) {
            callback(err, bookmark);
        });
};

exports.updateBookmark = function(id, data, callback) {
    Bookmark
        .findById(id)
        .update(data)
        .exec(function(err, bookmark) {
            callback(err, bookmark);
        });
};

exports.deleteBookmark = function(id, callback) {
    Bookmark
        .findById(id)
        .remove()
        .exec(function(err, bookmark) {
            callback(err, bookmark);
        });
};