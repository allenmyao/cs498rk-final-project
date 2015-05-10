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
    function($scope) {
        $scope.submitBookmarkForm = function() {
            // Create new stack with name = $scope.name
        };
        $scope.submitStackForm = function() {
            // Create new stack with name = $scope.name
        };
    }
]);