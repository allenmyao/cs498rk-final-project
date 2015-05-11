var appControllers = angular.module('appControllers');


appControllers.controller('ProfileController', [
    '$scope',
    '$routeParams',
    'Auth',
    'Stacks',
    function($scope, $routeParams, Auth, Stacks) {
        var currentUser = Auth.getUser();
        $scope.stacks = [];
        var params = {
            where: {
                owner_id: currentUser._id
            }
        };
        Stacks.get(params).success(function(data) {
            $scope.stacks = data.data;
        }).error(function(data) {
            // Error getting user's stacks
        });
    }
]);

appControllers.controller('OtherProfileController', [
    '$scope',
    '$routeParams',
    '$location',
    'Auth',
    'Stacks',
    'Users',
    function($scope, $routeParams, $location, Auth, Stacks, Users) {
        var userId = $routeParams.id;
        var currentUser = Auth.getUser();
        if (userId == currentUser._id) {
            $location.url('/profile');
        }
        console.log("OtherProfileController");
        Users.getOne(userId).success(function(data) {
            var otherUser = data.data;
            $scope.otherUser = otherUser;

            $scope.isFriend = false;
            for(var i=0;i<currentUser.friends.length;i++){
                if(currentUser.friends[i].friend_id=otherUser._id) {
                    $scope.isFriend = true;
                }
            }

            var params = {
                where: {
                    owner_id: otherUser._id
                }
            };
            Stacks.get(params).success(function(data) {
                var otherStacks = data.data;
                $scope.otherStacks = otherStacks;

            }).error(function(data) {
                // Error getting other user's stacks
            });
        }).error(function(data) {
            // Error getting other user
            var message = data.message;
            $scope.message = message;
        });

        // Work in Progress, 500 internal error receive with put request
        $scope.addFriendForm = function() {
            var newFriend = {
                friend_id:  '',
                friend_name: ''
             };
            var currentUser = Auth.getUser();
            var currentUser_friends = currentUser.friends;
            var userName = $scope.otherUser.username; 
            newFriend.friend_id = userId;
            newFriend.friend_name = userName;
            currentUser_friends.push(newFriend);
            //currentUser_friends.push((userId,userName));
            currentUser.friends = currentUser_friends;
            Users.update(currentUser._id, currentUser).success(function(data) {
                // Successfully updated user
                console.log('Successfully updated User');
            }).error(function(data) {
                // Error updating user
            });
        };
    }
]);
