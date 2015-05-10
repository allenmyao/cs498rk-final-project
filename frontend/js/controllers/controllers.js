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
        var currentUser = Auth.getUser();
        // Get friend ids
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