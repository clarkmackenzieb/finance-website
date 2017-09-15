angular.module("budgetApp").controller("budgetPageCtrl", function($scope, budgetService, $http, $firebaseArray){

$scope.disposableIncome = budgetService.disInc;




// $http.get('./js/numbeo.json')
//     .then(function(resolve){
//         $scope.cities = resolve.data;
//     })

$scope.getData = budgetService.getData;

$scope.pullData = function(city){
    budgetService.getData(city).then(function(response){
        $scope.cities = response;
    })
}

});