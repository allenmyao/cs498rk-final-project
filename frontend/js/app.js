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
            templateUrl: 'partials/home.html',
            controller: 'HomepageController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupController'
        })
        .when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileController'
        })
        .when('/profile/:username', {
            templateUrl: 'partials/otherprofile.html',
            controller: 'OtherProfileController'
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