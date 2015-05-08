var bookmarkController = require('./../bookmark-controller');
var respond = require('./utils').respond;

exports.getBookmarks = function(req, res, next) {
    bookmarkController.getBookmarks(function(err, bookmarks, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving bookmarks.";
        respond(res, bookmarks, err, errorMessage);
    })
};

exports.postBookmarks = function(req, res, next) {
    bookmarkController.createBookmark(req.body, function(err, bookmark, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while creating bookmark.";
        respond(res, bookmark, err, errorMessage);
    });
};

exports.optionsBookmarks = function(req, res, next) {
    res.status(200).send();
};

exports.getBookmark = function(req, res, next) {
    bookmarkController.getBookmark(req.params.bookmark_id, function(err, bookmark, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving bookmark.";
        respond(res, bookmark, err, errorMessage);
    });
};

exports.putBookmark = function(req, res, next) {
    bookmarkController.updateBookmark(req.params.bookmark_id, req.body, function(err, bookmark, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while updating bookmark.";
        respond(res, bookmark, err, errorMessage);
    });
};

exports.deleteBookmark = function(req, res, next) {
    bookmarkController.deleteBookmark(req.params.bookmark_id, function(err, bookmark, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while deleting bookmark.";
        respond(res, bookmark, err, errorMessage);
    });
};
