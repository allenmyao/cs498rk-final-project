var appControllers = angular.module('appControllers');


appControllers.controller('ModalAddStackController', [
    '$scope',
    'Auth',
    'Stacks',
    function($scope, Auth, Stacks) {
        $scope.stack = {
            name: '',
            color: '',
            private: false
        };
        $scope.submitStackForm = function() {
            var currentUser = Auth.getUser();
            var stackData = $scope.stack;
            stackData.owner_id = currentUser._id;
            Stacks.create(stackData).success(function(data) {
                // Successfully created stack
                console.log('Successfully created stack');
                window.location.reload();
            }).error(function(data) {
                // Error creating stack
            });
        };
    }
]);

appControllers.controller('ModalAddBookmarkController', [
    '$scope',
    'Auth',
    'Bookmarks',
    'Stacks',
    'Tags',
    function($scope, Auth, Bookmarks, Stacks, Tags) {
        var currentUser = Auth.getUser();
        $scope.bookmark = {
            name: '',
            url: '',
            private: false,
            tags: []
        };
        var params = {
            where: {
                owner_id: currentUser._id
            }
        };
        Stacks.get(params).success(function(data) {
            var stacks = data.data;
            $scope.stacks = stacks;
        }).error(function(data) {

        });
        Tags.get().success(function(data) {
            var tags = data.data;
            $scope.tags = tags;
        }).error(function(data) {

        });
        $scope.submitBookmarkForm = function() {
            // Create new stack with name = $scope.name
            var currentUser = Auth.getUser();
            var bookmarkData = $scope.bookmark;
            bookmarkData.owner_id = currentUser._id;
            Bookmarks.create(bookmarkData).success(function(data) {
                // Successfully created bookmark
                console.log('Successfully created bookmark');
                window.location.reload();
            }).error(function(data) {
                // Error creating bookmark
            });

        };
    }
]);