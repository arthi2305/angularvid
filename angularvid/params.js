.controller("studentsSearchController", function ($http, $stateParams) {
    var vm = this;

    if ($stateParams.name) {
        $http({
            url: "StudentService.asmx/GetStudentsByName",
            method: "get",
            params: { name: $stateParams.name }
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