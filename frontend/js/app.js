var app = angular.module('app', [
    'ngRoute', 
    'appControllers', 
    'appServices',
    'appDirectives'
]);


app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/main/home.html',
            controller: 'HomepageController'
        })
        .when('/login', {
            templateUrl: 'partials/main/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'partials/main/signup.html',
            controller: 'SignupController'
        })
        .when('/profile', {
            templateUrl: 'partials/profile/profile.html',
            controller: 'ProfileController'
        })
        .when('/profile/:username', {
            templateUrl: 'partials/profile/otherProfile.html',
            controller: 'OtherProfileController'
        })
        .when('/stacks/:id', {
            templateUrl: 'partials/stack/stackDetail.html',
            controller: 'stackDetailController'
        })
        .when('/bookmarks/:id', {
            templateUrl: 'partials/bookmark/bookmarkDetail.html',
            controller: 'bookmarkDetailController'
        })
        .when('/logout', {
            template: ' ',
            controller: 'LogoutController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);


app.run([
    '$window',
    function($window) {
        $window.sessionStorage.user = '';
    }
]);