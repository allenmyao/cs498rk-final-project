var express = require('express');
var bookmarkApiController = require('./../../controllers/api').bookmarkApiController;


module.exports = (function() {
    var bookmarkApiRouter = express.Router();

    bookmarkApiRouter.route('/')
        .get(bookmarkApiController.getBookmarks)
        .post(bookmarkApiController.postBookmarks);
        // .put()
        // .options()
        // .delete();

    bookmarkApiRouter.route('/:bookmark_id')
        .get(bookmarkApiController.getBookmark)
        // .post()
        .put(bookmarkApiController.putBookmark)
        .delete(bookmarkApiController.deleteBookmark);

    return bookmarkApiRouter;
})();