var bookmarkController = require('./../bookmark-controller');
var respond = require('./utils').respond;

exports.getBookmarks = function(req, res, next) {
    var where  = req.query.where  ? JSON.parse(req.query.where)  : {};
    var sort   = req.query.sort   ? JSON.parse(req.query.sort)   : {};
    var select = req.query.select ? JSON.parse(req.query.select) : {};
    var skip   = req.query.skip   ? parseInt(req.query.skip)     : 0;
    var limit  = req.query.limit  ? parseInt(req.query.limit)    : 0;
    var count  = req.query.count  ? req.query.count === 'true'   : false;
    var params = {
        where: where,
        sort: sort,
        select: select,
        skip: skip,
        limit: limit,
        count: count
    };
    console.log(params);
    // Check for private bookmarks
    // params.where = { $and: [
    //     params.where,
    //     { $or:  [ { private: false }, { $eq: { owner_id: req.user._id } } ] }
    // ] }
    bookmarkController.getBookmarks(params, function(err, bookmarks, errorMessage) {
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
            res.status(201);
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
