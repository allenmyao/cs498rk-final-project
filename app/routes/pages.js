var express = require('express');
var pages = require('./../controllers/pages');
var auth = require('./../controllers/auth');


module.exports = (function() {
    var pagesRouter = express.Router();

    pagesRouter.route('/')
        .get(pages.getIndex);

    pagesRouter.route('/loggedin')
        .get(pages.getLoggedIn);

    pagesRouter.route('/login')
        .post(auth.isAuthenticated, pages.postLogin);

    pagesRouter.route('/signup')
        .post(pages.postSignup);

    pagesRouter.route('/logout')
        .post(pages.postLogout);
    
    return pagesRouter;
})();