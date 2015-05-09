var appServices = angular.module('appServices', []);


appServices.factory('Auth', [
    '$http',
    '$window',
    'baseUrl',
    function($http, $window, baseUrl) {
        return {
            getUser: function() {
                var userStr = $window.sessionStorage.user;
                if (!userStr) return false;
                try {
                    var user = JSON.parse(userStr);
                } catch (e) {
                    console.log('Error parsing user in session');
                    return false;
                }
                return user;
            },
            setUser: function(data) {
                return $window.sessionStorage.user = JSON.stringify(data);
            },
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
    'baseUrl',
    function($http, baseUrl) {
        var getUrl = function(id) {
            return baseUrl + '/api/users' + (id ? '/' + id: '');
        };

        return {
            get: function(params) {
                return $http.get(getUrl(), {
                    params: params
                });
            },
            create: function(data) {
                return $http.post(getUrl(), data);
            },
            getOne: function(id) {
                return $http.get(getUrl(id));
            },
            update: function(id, data) {
                return $http.put(getUrl(id), data);
            },
            delete: function(id) {
                return $http.delete(getUrl(id));
            }
        };
    }
]);

appServices.factory('Bookmarks', [
    '$http',
    'baseUrl',
    function($http, baseUrl) {
        var getUrl = function(id) {
            return baseUrl + '/api/bookmarks' + (id ? '/' + id: '');
        };

        return {
            get: function(params) {
                return $http.get(getUrl(), {
                    params: params
                });
            },
            create: function(data) {
                return $http.post(getUrl(), data);
            },
            getOne: function(id) {
                return $http.get(getUrl(id));
            },
            update: function(id, data) {
                return $http.put(getUrl(id), data);
            },
            delete: function(id) {
                return $http.delete(getUrl(id));
            }
        };
    }
]);

appServices.factory('Stacks', [
    '$http',
    'baseUrl',
    function($http, baseUrl) {
        var getUrl = function(id) {
            return baseUrl + '/api/stacks' + (id ? '/' + id: '');
        };

        return {
            get: function(params) {
                return $http.get(getUrl(), {
                    params: params
                });
            },
            create: function(data) {
                return $http.post(getUrl(), data);
            },
            getOne: function(id) {
                return $http.get(getUrl(id));
            },
            update: function(id, data) {
                return $http.put(getUrl(id), data);
            },
            delete: function(id) {
                return $http.delete(getUrl(id));
            }
        };
    }
]);

appServices.factory('Comments', [
    '$http',
    'baseUrl',
    function($http, baseUrl) {
        var getUrl = function(id) {
            return baseUrl + '/api/comments' + (id ? '/' + id: '');
        };

        return {
            get: function(params) {
                return $http.get(getUrl(), {
                    params: params
                });
            },
            create: function(data) {
                return $http.post(getUrl(), data);
            },
            getOne: function(id) {
                return $http.get(getUrl(id));
            },
            update: function(id, data) {
                return $http.put(getUrl(id), data);
            },
            delete: function(id) {
                return $http.delete(getUrl(id));
            }
        };
    }
]);

appServices.factory('Tags', [
    '$http',
    'baseUrl',
    function($http, baseUrl) {
        var getUrl = function(id) {
            return baseUrl + '/api/tags' + (id ? '/' + id: '');
        };

        return {
            get: function(params) {
                return $http.get(getUrl(), {
                    params: params
                });
            },
            // create: function(data) {
            //     return $http.post(getUrl(), data);
            // },
            getOne: function(id) {
                return $http.get(getUrl(id));
            }
            // update: function(id, data) {
            //     return $http.put(getUrl(id), data);
            // },
            // delete: function(id) {
            //     return $http.delete(getUrl(id));
            // }
        };
    }
]);