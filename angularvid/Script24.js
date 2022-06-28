.controller("studentsController", function ($http, $route) {
    var vm = this;

    vm.reloadData = function () {
        $route.reload();
    }

    $http.get("StudentService.asmx/GetAllStudents")
        .then(function (response) {
            vm.students = response.data;
        })
})