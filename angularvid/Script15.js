/// <reference path="angular.min.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: "Ben",
            lastName: "Hastings",
            gender: "Male"
        };

        $scope.employee = employee;
    });
/*
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "United States of America",
            capital: "Washington, D.C.",
            flag: "/Image/Screenshot (1).png"
        };
        $scope.country = country;
    });
*/

/*
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: 'Mark',
            lastName: 'Hastings',
            gender: 'Male'
        };
        $scope.employee = employee;
    });
    */
//var myApp = angular.module("myModule", [])
/*
myApp.controller("myController", function ($scope) {
    $scope.message = "AngularJS Tutorial";
});
*/

/*
myApp.controller("myController", function ($scope) {

    var employee = {
        firstName: 'Mark',
        lastName: 'Hastings',
        gender: 'Male'
    };

    $scope.employee = employee;
});
*/

