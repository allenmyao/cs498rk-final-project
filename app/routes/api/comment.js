var express = require('express');
var commentApiController = require('./../../controllers/api').commentApiController;


module.exports = (function() {
    var commentApiRouter = express.Router();

    commentApiRouter.route('/')
        .get(commentApiController.getComments)
        .post(commentApiController.postComments);
        // .put()
        // .options()
        // .delete();

    commentApiRouter.route('/:comment_id')
        .get(commentApiController.getComment)
        // .post()
        .put(commentApiController.putComment)
        .delete(commentApiController.deleteComment);

    return commentApiRouter;
})();