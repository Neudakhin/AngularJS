'use strict';

angular.
    module('userList').
    component('userList', {
        templateUrl: 'user-list/user-list.template.html',
        controller: ['$http', function userListСекд($http){
            var self = this;

            $http.get('resource/users.json').then(function(response){
                self.users = response.data;
            })
        }]
    })