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
            .when('/home', {
                templateUrl: 'partials/main/home.html',
                controller: 'HomepageController'
            })
            .when('/', {
                redirectTo: '/login'
            })
            .when('/login', {
                templateUrl: 'partials/main/login.html',
                controller: 'LoginController'
            })
            .when('/signup', {
                templateUrl: 'partials/main/signup.html',
                controller: 'SignupController'
            })
            .when('/logout', {
                template: ' ',
                controller: 'LogoutController'
            })
            .when('/profile', {
                templateUrl: 'partials/profile/profile.html',
                controller: 'ProfileController'
            })
            .when('/profile/:id', {
                templateUrl: 'partials/profile/otherProfile.html',
                controller: 'OtherProfileController'
            })
            .when('/stacks/:id', {
                templateUrl: 'partials/stack/stackDetail.html',
                controller: 'StackDetailController'
            })
            .when('/stacks/:id/edit', {
                templateUrl: 'partials/stack/stackEdit.html',
                controller: 'StackEditController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);


app.run([
    '$window',
    function($window) {
        if (!"user" in $window.sessionStorage)
            $window.sessionStorage.user = '';
    }
]);
