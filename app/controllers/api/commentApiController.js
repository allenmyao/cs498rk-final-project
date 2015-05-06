var commentController = require('./../commentController');


exports.getComments = function(req, res, next) {
    commentController.getComments(function(err, comments) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving comments',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved comments',
                data: comments
            });
        }
    })
};

exports.postComments = function(req, res, next) {
    commentController.createComment(req.body, function(err, comment) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while creating comment',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully created comment',
                data: comment
            });
        }
    });
};

exports.optionsComments = function(req, res, next) {
    res.status(200).send();
};

exports.getComment = function(req, res, next) {
    commentController.getComment(req.params.comment_id, function(err, comment) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while retrieving comment',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved comment',
                data: comment
            });
        }
    });
};

exports.putComment = function(req, res, next) {
    commentController.updateComment(req.params.comment_id, req.body, function(err, comment) {
        if (err) {
            res.status(500).json({
                message: 'Error encountered while updating comment',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully updated comment',
                data: comment
            });
        }
    });
};

exports.deleteComment = function(req, res, next) {
    commentController.deleteComment(req.params.comment_id, function(err, comment) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Successfully deleted comment',
                data: comment
            });
        }
    });
};