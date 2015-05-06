var express = require('express');
var tagApiController = require('./../../controllers/api').tagApiController;


module.exports = (function() {
    var tagApiRouter = express.Router();

    tagApiRouter.route('/')
        .get(tagApiController.getTags);

    return tagApiRouter;
})();