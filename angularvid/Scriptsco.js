var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController as coursesCtrl",
                controllerAs: "coursesCtrl"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController as studentsCtrl",
                controllerAs: "studentsCtrl"
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController as studentDetailsCtrl",
                controllerAs: "studentDetailsCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            })
        $locationProvider.html5Mode(true);
    })
var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController as coursesCtrl",
                controllerAs: "coursesCtrl"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController as studentsCtrl",
                controllerAs: "studentsCtrl"
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController as studentDetailsCtrl",
                controllerAs: "studentDetailsCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            })
        $locationProvider.html5Mode(true);
    })
