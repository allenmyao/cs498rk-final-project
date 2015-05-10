var appControllers = angular.module('appControllers');


appControllers.controller('StackDetailController', [
    '$scope',
    '$routeParams',
    'Stacks',
    function($scope, $routeParams, Stacks) {
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
    '$routeParams',
    'Stacks',
    function($scope, $routeParams, Stack) {
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