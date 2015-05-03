var express = require('express');
var stackApiController = require('./../../controllers/api').stackApiController;


module.exports = (function() {
    var stackApiRouter = express.Router();

    stackApiRouter.route('/')
        .get(stackApiController.getStacks)
        .post(stackApiController.postStacks);
        // .put()
        // .options()
        // .delete();

    stackApiRouter.route('/:stack_id')
        .get(stackApiController.getStack)
        // .post()
        .put(stackApiController.putStack)
        .delete(stackApiController.deleteStack);

    return stackApiRouter;
})();