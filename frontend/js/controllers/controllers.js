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
        checkIfLoggedIn();

        $scope.$on('login', checkIfLoggedIn);
        $scope.$on('logout', checkIfLoggedIn);
    }
]);

appControllers.controller('HomepageController', [
    '$scope',
    'Auth',
    'Stacks',
    'Users',
    function($scope, Auth, Stacks, Users) {
        var currentUser = Auth.getUser();
        // Get friend ids
        var friends = currentUser.friends;
        var friendUsers = null;
        var params = {
            where: {
                owner_id: {
                    $in: friends
                }
            }
        };
        Stacks.get().success(function(data) {
            var stacks = data.data;

            var friendParams = {
                where: {
                    _id: {
                        $in: friends
                    }
                }
            };
            Users.get().success(function(data) {
                friendUsers = data.data;
                $scope.stacks = stacks;
            }).error(function(data) {
                // Error
            });
        }).error(function(data) {
            // Error getting user's stacks
        });

        $scope.getUsername = function(id) {
            return friendUsers.filter(function(f) { return f._id == id; })[0].username;
        }

    }
]);