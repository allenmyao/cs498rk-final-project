var express = require('express');
var pages = require('./../controllers/pages');
var auth = require('./../controllers/auth');


module.exports = (function() {
    var pagesRouter = express.Router();

    pagesRouter.route('/')
        .get(pages.getIndex);

    pagesRouter.route('/login')
        .get(pages.getLogin)
        .post(pages.postLogin, auth.isAuthenticated('/profile', '/login'));

    pagesRouter.route('/signup')
        .get(pages.getSignup)
        .post(pages.postSignup, auth.isAuthenticated('/profile', '/signup'));

    // pagesRouter.route('/logout')
    //     .get();

    pagesRouter.route('/profile')
        .get(pages.getProfile, auth.isLoggedIn);

    pagesRouter.route('/profile/:username')
        .get(pages.getProfile);
    
    return pagesRouter;
})();