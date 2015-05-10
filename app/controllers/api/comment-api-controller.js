var commentController = require('./../comment-controller');
var respond = require('./utils').respond;

exports.getComments = function(req, res, next) {
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
    commentController.getComments(params, function(err, comments, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving comments.";
        respond(res, comments, err, errorMessage);
    })
};

exports.postComments = function(req, res, next) {
    commentController.createComment(req.body, function(err, comment, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(201);
        }
        errorMessage = errorMessage || "Error encountered while creating comment.";
        respond(res, comment, err, errorMessage);
    });
};

exports.optionsComments = function(req, res, next) {
    res.status(200).send();
};

exports.getComment = function(req, res, next) {
    commentController.getComment(req.params.comment_id, function(err, comment, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving comment.";
        respond(res, comment, err, errorMessage);
    });
};

exports.putComment = function(req, res, next) {
    commentController.updateComment(req.params.comment_id, req.body, function(err, comment, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while updating comment.";
        respond(res, comment, err, errorMessage);
    });
};

exports.deleteComment = function(req, res, next) {
    commentController.deleteComment(req.params.comment_id, function(err, comment, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while deleting comment.";
        respond(res, comment, err, errorMessage);
    });
};
