$stateProvider
    .state("home", {
        url: "/home",
        templateUrl: "Templates/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl",
        data: {
            customData1: "Home State Custom Data 1",
            customData2: "Home State Custom Data 2"
        }
    })
    .state("courses", {
        url: "/courses",
        templateUrl: "Templates/courses.html",
        controller: "coursesController",
        controllerAs: "coursesCtrl",
        data: {
            customData1: "Courses State Custom Data 1",
            customData2: "Courses State Custom Data 2"
        }
    })