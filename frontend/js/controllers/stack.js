var appControllers = angular.module('appControllers');


appControllers.controller('StackDetailController', [
    '$scope',
    '$routeParams',
    'Auth',
    'Bookmarks',
    'Comments',
    'Stacks',
    'Tags',
    'Users',
    function($scope, $routeParams, Auth, Bookmarks, Comments, Stacks, Tags, Users) {
        $scope.stackId = $routeParams.id;
        $scope.stack = {};
        var currentUser = Auth.getUser();
        $scope.currentUser = currentUser;

        Stacks.getOne($scope.stackId).success(function(data) {
            var stack = data.data;
            $scope.stack = stack;
            $scope.isCurrentUserStack = currentUser._id == stack.owner_id;
            console.log('Stack belongs to current user: ' + $scope.isCurrentUserStack);

            var params = {
                where: {
                    stack_id: stack._id
                }
            };

            // TODO: Get bookmarks (name, url) from stack.bookmarks._id 
            Bookmarks.get(params).success(function(data) {
                var bookmarks = data.data;
                $scope.bookmarks = bookmarks;

            }).error(function(data) {
                // Error getting bookmarks in stack
            });

            // TODO: Get the comment data from stack's comment ids
            Comments.get(params).success(function(data) {
                var comments = data.data;
                $scope.comments = comments;

            }).error(function(data) {
                // Error getting stack comments
            });

            Users.getOne(stack.owner_id).success(function(data) {
                var user = data.data;
                $scope.owner = user;

            }).error(function(data) {
                // Error getting stack owner
            });

        }).error(function(data) {
            // Error getting stack
        });

        $scope.submitCommentForm = function() {
            // Create new comment with params
        };

        $scope.deleteStack = function(){
            Stacks.deleteStack($scope.stackId).success(function(data) {
                console.log("Deleted stack.");
                // Stack deleted, redirect
                location.href("#/stacks/");
            }).error(function(data) {
                // Error deleting stack
            });
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