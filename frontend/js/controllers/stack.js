var appControllers = angular.module('appControllers');


appControllers.controller('StackDetailController', [
    '$scope',
    '$routeParams',
    'Bookmarks',
    'Comments',
    'Stacks',
    'Tags',
    'Users',
    function($scope, $routeParams, Bookmarks, Comments, Stacks, Tags, Users) {
        $scope.stackId = $routeParams.stackId;
        $scope.stack = {};


        Stacks.getOne($scope.stackId).success(function(data) {
            var stack = data.data;
            $scope.stack = stack;

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
                $scope.user = user;

            }).error(function(data) {
                // Error getting stack owner
            });
        }).error(function(data) {
            // Error getting stack
        });

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