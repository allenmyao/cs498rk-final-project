var bookmarkController = require('./../bookmark-controller');


exports.getBookmarks = function(req, res, next) {
    bookmarkController.getBookmarks(function(err, bookmarks) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving bookmarks',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved bookmarks',
                data: bookmarks
            });
        }
    })
};

exports.postBookmarks = function(req, res, next) {
    bookmarkController.createBookmark(req.body, function(err, bookmark) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while creating bookmark',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully created bookmark',
                data: bookmark
            });
        }
    });
};

exports.optionsBookmarks = function(req, res, next) {
    res.status(200).send();
};

exports.getBookmark = function(req, res, next) {
    bookmarkController.getBookmark(req.params.bookmark_id, function(err, bookmark) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving bookmark',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved bookmark',
                data: bookmark
            });
        }
    });
};

exports.putBookmark = function(req, res, next) {
    bookmarkController.updateBookmark(req.params.bookmark_id, req.body, function(err, bookmark) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while updating bookmark',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully updated bookmark',
                data: bookmark
            });
        }
    });
};

exports.deleteBookmark = function(req, res, next) {
    bookmarkController.deleteBookmark(req.params.bookmark_id, function(err, bookmark) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully deleted bookmark',
                data: bookmark
            });
        }
    });
};