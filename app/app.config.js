'use strict';

angular.
    module('app').
    config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
            when('/list',{
                template: '<user-list></user-list>'
            }).
            when('/tree',{
                template: '<user-tree></user-tree>'
            }).
            otherwise('/');
    }
  ]);