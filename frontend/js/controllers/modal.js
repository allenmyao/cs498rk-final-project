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
    function($scope, Auth, Bookmarks, Stacks) {
        $scope.bookmark = {
            name: '',
            url: '',
            private: false,
            tags: []
        };
        $scope.submitBookmarkForm = function() {
            // Create new stack with name = $scope.name
            console.log('Adding bookmark');
        };
    }
]);