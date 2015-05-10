var appControllers = angular.module('appControllers');


appControllers.controller('ProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    function($scope, $routeParams, Auth) {
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