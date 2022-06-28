.controller("studentsSearchController", function ($http, $routeParams) {
    var vm = this;

    if ($routeParams.name) {
        $http({
            url: "StudentService.asmx/GetStudentsByName",
            method: "get",
            params: { name: $routeParams.name }
        }).then(function (response) {
            vm.students = response.data;
        })
    }
    else {
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                vm.students = response.data;
            })
    }
})
