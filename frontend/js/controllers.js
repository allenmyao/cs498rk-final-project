var appControllers = angular.module('appControllers', []);


appControllers.controller('MainController', [
    '$scope',
    'Auth',
    function($scope, Auth) {
        function checkIfLoggedIn() {
            $scope.currentUser = Auth.getUser();
            $scope.isLoggedIn = !!$scope.currentUser;
            console.log('MainController');
            console.log($scope.currentUser);
        }

        $scope.$on('login', checkIfLoggedIn);
        $scope.$on('logout', checkIfLoggedIn);
    }
]);

appControllers.controller('HomepageController', [
    '$scope',
    function($scope) {
        $scope.submitBookmarkForm = function() {
            // Create new stack with name = $scope.name
        };
        $scope.submitStackForm = function() {
            // Create new stack with name = $scope.name
        };
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
                    $scope.$emit('login');
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
                    $scope.$emit('login');
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
    }
]);

appControllers.controller('ProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    function($scope, $routeParams, Auth) {
        $scope.username = $routeParams.username;
    }
]);

appControllers.controller('LogoutController', [
    '$location',
    'Auth',
    function($location, Auth) {
        if (!Auth.getUser) $location.url('/');
        Auth.logout().success(function(data) {
            Auth.setUser('');
            $scope.$emit('logout');
            console.log('Logged out');
            $location.url('/');
        }).error(function(data) {
            console.log('Failed to logout');
        });
    }
]);


appControllers.controller('StackDetailController', [
    '$scope',
    function($scope) {
        $scope.stackId = $routeParams.stackId;

        // Get the stack
        // $scope.stack

        // Get the user data from owner_id
        // $scope.owner

        // Get the comment data from stack's comment ids
        // $scope.comments

        // Get bookmarks (name, url) from stack.bookmarks._id 
        // $scope.bookmarks

        // $http.get(baseUrl+'/api/stacks/'+$routeParams.stackId).success(function(data) {
        //     $scope.stack = data.data;
        // });

        $scope.submitCommentForm = function() {
            // Create new comment with params
        };
    }
]);

appControllers.controller('StackEditController', [
    '$scope',
    function($scope) {
        $scope.stackId = $routeParams.stackId;

        // Get the stack
        // $scope.stack

        // Get the user data from owner_id
        // $scope.owner

        // Get the comment data from stack's comment ids
        // $scope.comments

        // Get bookmarks (name, url) from stack.bookmarks._id 
        // $scope.bookmarks

        // $http.get(baseUrl+'/api/stacks/'+$routeParams.stackId).success(function(data) {
        //     $scope.stack = data.data;
        // });

        $scope.submitForm = function() {
            // Save stack with changes
        };
    }
]);

appControllers.controller('OtherProfileController', [
    '$scope',
    function($scope) {
        // Get the user from route param
        // $scope.otherUser

        // Get their stacks
        // $scope.otherStacks
    }
]);