var models = require('./../models');
var Bookmark = models.Bookmark;
var Stack = models.Stack;

exports.getBookmarks = function(params, callback) {
    Bookmark
        .find(params.where)
        .select(params.select)
        .sort(params.sort)
        .skip(params.skip)
        .limit(params.limit)
        .exec(function(err, bookmarks) {
            callback(err, params.count ? bookmarks.length : bookmarks);
        });
};

exports.createBookmark = function(data, callback) {
    var newBookmark = new Bookmark(data);
    newBookmark.save(function(err, bookmark) {
        if (!err) {
            // push bookmark to Stack
            Stack.findOneAndUpdate(bookmark.stack_id, {
                $push: {
                    "bookmarks": bookmark._id
                }
            }, function(err, updated) {
                callback(err, updated, "Created new bookmark. Failed to update Stack.");
            });
        } else {
            callback(err, bookmark);
        }
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
    Bookmark.findOneAndUpdate(id, data, function(err, bookmark) {
        callback(err, bookmark);
    });
};

exports.deleteBookmark = function(id, callback) {
    Bookmark.findById(id, function(err, bookmark) {
        if (!err) {
            // delete bookmark
            bookmark.remove(function(err, removed) {
                if (!err) {
                    // update Stack to pull the deleted bookmark
                    Stack.findOneAndUpdate(bookmark.stack_id, {
                        $pull: {
                            bookmarks: bookmark._id
                        }
                    }, function(err, updated) {
                        callback(err, updated, "Deleted bookmark but failed to pull from the Stack.");
                    });
                } else {
                    callback(err, removed, "Failed to remove the bookmark.");
                }
            });
        } else {
            callback(err, bookmark, "Failed to find the bookmark to delete.");
        }
    });
};
