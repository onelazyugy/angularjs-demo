var app = angular.module('tutorialApp', ['ngRoute', 'tutorialCtrlModule', 'tutorialServiceModule', 'tutorialDirectiveModule']);

var controllers =  angular.module("tutorialCtrlModule", []);
var services = angular.module("tutorialServiceModule", []);
var directives = angular.module("tutorialDirectiveModule", []);

controllers.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialCtrl"
        })
        .when("/tutorialSecond", {
            templateUrl: "views/tutorialSecond.html",
            controller: "TutorialCtrl2"
        })
        .otherwise({
            redirectTo: "/"
        })
})