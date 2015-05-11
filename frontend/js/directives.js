var appDirectives = angular.module('appDirectives', []);


appDirectives.directive('addStackModal', function() {
    return {
        controller: 'ModalAddStackController',
        restrict: 'A',
        scope: {},
        templateUrl: 'partials/modal/addStack.html'
    };
});

appDirectives.directive('addBookmarkModal', function() {
    return {
        controller: 'ModalAddBookmarkController',
        restrict: 'A',
        scope: {},
        templateUrl: 'partials/modal/addBookmark.html'
    };
});