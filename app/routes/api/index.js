var express = require('express');
var UserApiRouter = require('./user');


module.exports = (function() {
    var apiRouter = express.Router();
    
    apiRouter.use('/users', UserApiRouter);
    // apiRouter.use('/collections', );
    // apiRouter.use('/bookmarks', );

    return apiRouter;
})();