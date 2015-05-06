var express = require('express');
var userApiRouter = require('./userApiRouter');
var bookmarkApiRouter = require('./bookmarkApiRouter');
var stackApiRouter = require('./stackApiRouter');
var commentApiRouter = require('./commentApiRouter');
var tagApiRouter = require('./tagApiRouter');


module.exports = (function() {
    var apiRouter = express.Router();
    
    apiRouter.use('/users', userApiRouter);
    apiRouter.use('/bookmarks', bookmarkApiRouter);
    apiRouter.use('/stacks', stackApiRouter);
    apiRouter.use('/comments', commentApiRouter);
    apiRouter.use('/tags', tagApiRouter);

    return apiRouter;
})();