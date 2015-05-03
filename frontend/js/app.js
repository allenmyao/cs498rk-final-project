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
            templateUrl: 'partials/index.html',
            controller: 'IndexController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupController'
        })
        // .when('/profile', {
        //     templateUrl: 'partials/profile.html',
        //     controller: 'ProfileController'
        // })
        .when('/profile/:username', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);