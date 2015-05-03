var express = require('express');
var userApiRouter = require('./user');
var bookmarkApiRouter = require('./bookmark');
var stackApiRouter = require('./stack');
var commentApiRouter = require('./comment');
var tagApiRouter = require('./tag');


module.exports = (function() {
    var apiRouter = express.Router();
    
    apiRouter.use('/users', userApiRouter);
    apiRouter.use('/bookmarks', bookmarkApiRouter);
    apiRouter.use('/stacks', stackApiRouter);
    apiRouter.use('/comments', commentApiRouter);
    apiRouter.use('/tags', tagApiRouter);

    return apiRouter;
})();