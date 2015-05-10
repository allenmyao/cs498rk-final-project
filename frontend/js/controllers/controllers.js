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
    function($scope, Auth, Stacks) {
        $scope.bookmark = {
            name: '',
            url: '',
            private: false,
            tags: []
        };
        $scope.submitBookmarkForm = function() {
            // Create new stack with name = $scope.name
        };

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
