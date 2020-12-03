var myApp = angular.module('myApp',[])

myApp.controller('mainController', function ($scope) {
    $scope.name = 'Mohamad Husari';
    $scope.getname = function () {
        return $scope.name;
    };
    console.log($scope);
});