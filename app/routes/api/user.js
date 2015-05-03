var express = require('express');
var userApiController = require('./../../controllers/api').userApiController;


module.exports = (function() {
    var userApiRouter = express.Router();

    userApiRouter.route('/')
        .get(userApiController.getUsers)
        .post(userApiController.postUsers);
        // .put()
        // .options()
        // .delete();

    userApiRouter.route('/:user_id')
        .get(userApiController.getUser)
        // .post()
        .put(userApiController.putUser)
        .delete(userApiController.deleteUser);

    return userApiRouter;
})();