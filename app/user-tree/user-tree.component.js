'use strict';

angular.
    module('userTree').
    component('userTree', {
        templateUrl: 'user-tree/user-tree.template.html',
        controller: ['$http', function userTreeCtrl($http){
            var self = this;

            $http.get('resource/employee.json').then(function(response){
                self.users = response.data;
            })
        }]
    }).
    component('userSubTree',{
        templateUrl: 'user-tree/user-sub-tree.template.html',
        bindings: {
            usersArr: '<',
        }
    })