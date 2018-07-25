controllers.controller('TutorialCtrl', ["$scope", "tutorialServices", "multiplicationServices" ,function($scope, tutorialServices, multiplicationServices){
    $scope.tutorialObject = {};
    $scope.tutorialObject.fname = 'Viet';
    $scope.tutorialObject.lname = 'Le';

    $scope.tutorialObject.bindOutput = 2;

    $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput = tutorialServices.timesTwo($scope.tutorialObject.bindOutput);
    }

    $scope.csquare = tutorialServices.pythagoreanTheorum(2, 3);
    multiplicationServices.multiplyBy(9);
    $scope.numberMuliplyBy = multiplicationServices.getNumber();
}]);

controllers.controller("TutorialCtrl2", ["$scope", "multiplicationServices", function($scope, multiplicationServices){
    $scope.secondTutorial = "This is the second tutorial";
    $scope.numberMuliplyBy = multiplicationServices.getNumber();
}]);
