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

            var commentparams = {
                where: {
                    stack: stack._id
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
            Comments.get(commentparams).success(function(data) {
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

        $scope.comment = {
            name: '',
            user: '',
            message: ''
        };
        $scope.submitCommentForm = function() {
            var currentUser = Auth.getUser();
            var commentData = $scope.comment;
            var currentStack = $scope.stack;
            commentData.user = currentUser._id;
            commentData.username = currentUser.name;
            commentData.stack = currentStack._id;
            commentData.dateCreated = new Date();
            Comments.create(commentData).success(function(data) {
                // Successfully added comment
                console.log('Successfully created comment');
                window.location.reload();
            }).error(function(data) {
                // Error creating comment
            });
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

            var commentparams = {
                where: {
                    stack: stack._id
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
            Comments.get(commentparams).success(function(data) {
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


        $scope.saveStack = function() {
            // Save stack with changes
            var stackData = $scope.stack;
            // stackData.lastUpdated = new Date();
            // console.log(stackData._id);
            // console.log(stackData);

            // NOTE: not working yet

            Stacks.update(stackData._id, stackData).success(function(data) {
                // Updated stack
                console.log('Successfully updated stack');
                window.location.reload();
            }).error(function(data) {
                // Error
            });
        };

        $scope.bookmark = {
            name: '',
            url: '',
            private: false,
            tags: []
        };
        $scope.addBookmarkToStack = function() {
            var currentUser = Auth.getUser();
            var bookmarkData = $scope.bookmark;
            var currentStack = $scope.stack;
            bookmarkData.owner_id = currentUser._id;
            bookmarkData.stack_id = currentStack._id;
            Bookmarks.create(bookmarkData).success(function(data) {
                // Successfully created bookmark
                console.log('Successfully created bookmark');
                window.location.reload();
            }).error(function(data) {
                // Error creating bookmark
            });
        };
        $scope.deleteBookmark = function(bookmark_id) {
            Bookmarks.delete(bookmark_id).success(function(data) {
                console.log('Successfully deleted bookmark');
                window.location.reload();
            }).error(function(data) {
                // Error deleting bookmark
            });
        };

        $scope.deleteComment = function(comment_id) {
            Comments.delete(comment_id).success(function(data) {
                console.log('Successfully deleted comment');
                window.location.reload();
            }).error(function(data) {
                // Error deleting comment
            });
        };
    }
]);