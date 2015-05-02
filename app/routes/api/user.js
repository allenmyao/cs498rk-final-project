var express = require('express');
var UserApiController = require('./../../controllers/api').UserApiController;


module.exports = (function() {
    var userApiRouter = express.Router();

    userApiRouter.route('/')
        .get(UserApiController.getUsers)
        .post(UserApiController.postUsers);
        // .put()
        // .options()
        // .delete();

    userApiRouter.route('/:user_id')
        .get(UserApiController.getUser)
        // .post()
        .put(UserApiController.putUser)
        .delete(UserApiController.deleteUser);

    return userApiRouter;
})();