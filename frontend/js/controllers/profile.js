var appControllers = angular.module('appControllers');


appControllers.controller('ProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    'Stacks',
    function($scope, $routeParams, Auth, Stacks) {
        var currentUser = Auth.getUser();
        var params = {
            where: {
                owner_id: currentUser._id
            }
        };
        Stacks.get(params).success(function(data) {
            var stacks = data.data;
            $scope.stacks = stacks;
        }).error(function(data) {
            // Error getting user's stacks
        });
    }
]);

appControllers.controller('OtherProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    function($scope, $routeParams, Auth) {
        $scope.username = $routeParams.username;
        // Get the user from route param
        // $scope.otherUser

        // Get their stacks
        // $scope.otherStacks
    }
]);