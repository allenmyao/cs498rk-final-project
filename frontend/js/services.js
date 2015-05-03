var appServices = angular.module('appServices', []);


appServices.factory('Auth', [
    '$http',
    'baseUrl',
    function($http, baseUrl) {
        return {
            login: function(data) {
                return $http.post(baseUrl + '/login', data);
            },
            signup: function(data) {
                return $http.post(baseUrl + '/signup', data);
            },
            logout: function() {
                return $http.post(baseUrl + '/logout');
            }
        };
    }
]);

appServices.factory('Users', [
    '$http',
    'baseUrl'
    function($http, baseUrl) {
        return {
            get: function(params) {
                return $http.get(baseUrl + '/api/users', {
                    params: params
                });
            },
            create: function(data) {
                return $http.post(baseUrl + '/api/users', data);
            },
            getOne: function(id) {
                return $http.get(baseUrl + '/api/users/' + id);
            },
            update: function(id, data) {
                return $http.put(baseUrl + '/api/users/' + id, data);
            },
            delete: function(id) {
                return $http.delete(baseUrl + '/api/users/' + id);
            }
        };
    }
]);