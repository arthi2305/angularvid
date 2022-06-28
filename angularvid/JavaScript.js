var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($stateProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .state("courses", {
                url: "/courses",
                templateUrl: "Templates/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl"
            })

            .state("students", {
                url: "/students",
                templateUrl: "Templates/students.html",
                controller: "studentsController",
                controllerAs: "studentsCtrl",
                resolve: {
                    studentslist: function ($http, $location) {
                        return $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
                    }
                }
            })
    })