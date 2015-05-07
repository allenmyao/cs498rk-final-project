var appControllers = angular.module('appControllers', []);


appControllers.controller('HomepageController', [
    '$scope',
    function($scope) {
        
    }
]);

appControllers.controller('LoginController', [
    '$scope',
    '$location',
    'Auth',
    function($scope, $location, Auth) {
        function redirectIfLoggedIn() {
            var user = Auth.getUser();
            if (user) {
                $location.url('/profile');
            }
        }
        redirectIfLoggedIn();

        $scope.user = {
            username: '',
            password: ''
        };
        $scope.submitForm = function() {
            Auth.login($scope.user).success(function(data) {
                if (data) {
                    Auth.setUser(data);
                    redirectIfLoggedIn();
                } else {
                    console.log('No data returned from /login');
                }
            }).error(function(data) {
                console.log('/login error');
            });
        };
    }
]);

appControllers.controller('SignupController', [
    '$scope',
    '$location',
    'Auth',
    function($scope, $location, Auth) {
        function redirectIfLoggedIn() {
            var user = Auth.getUser();
            if (user) {
                $location.url('/profile');
            }
        }
        redirectIfLoggedIn();

        $scope.user = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        $scope.submitForm = function() {
            Auth.signup($scope.user).success(function(data) {
                if (data) {
                    Auth.setUser(data);
                    redirectIfLoggedIn();
                } else {
                    console.log('No data returned from /signup');
                }
            }).error(function(data) {
                console.log('/signup error');
            });
        };
    }
]);

appControllers.controller('ProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    function($scope, $routeParams, Auth) {
        $scope.username = $routeParams.username;
        $scope.currentUser = Auth.getUser();
        $scope.isLoggedIn = !!$scope.currentUser;
    }
]);

appControllers.controller('LogoutController', [
    '$location',
    'Auth',
    function($location, Auth) {
        if (!Auth.getUser) $location.url('/');
        Auth.logout().success(function(data) {
            console.log('Logged out');
            Auth.setUser('');
            $location.url('/');
        }).error(function(data) {
            console.log('Failed to logout');
        });
    }
]);


appControllers.controller('StackDetailController', [
    '$scope',
    function($scope) {
        
    }
]);

appControllers.controller('BookmarkDetailController', [
    '$scope',
    function($scope) {
        
    }
]);