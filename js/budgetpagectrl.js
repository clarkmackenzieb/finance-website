angular.module("budgetApp").controller("budgetPageCtrl", function($scope, budgetService, $http, $firebaseArray){

$scope.disposableIncome = budgetService.disInc;

$scope.sillyfun = function(){
    console.log("err")
    return budgetService.weirdFunc();
}

$scope.ruralAptOne = 0;
$scope.cityAptOne = 0;
$scope.ruralAptThree = 0;
$scope.ruralAptThree = 0;
$scope.avgutil = 0;


// $scope.ctx = document.getElementById("myChart").getContext('2d');

$scope.getData = function(data){
    
    return budgetService.getData(data).then(function(response){

        console.log(response)

        $scope.ruralAptOne = response.data.prices[22].average_price;
        $scope.cityAptOne = response.data.prices[21].average_price;
        $scope.ruralAptThree = response.data.prices[24].average_price;
        $scope.cityAptThree = response.data.prices[23].average_price;
        $scope.avgutil = response.data.prices[25].average_price;

        var myPieChart = new Chart($scopectx,{
            type: 'pie',
            data: {
              datasets: [{
                  label: "Monthly Budget?",
                  data: [$scope.ruralAptOne, $scope.cityAptOne, $scope.ruralAptThree],    
                  // state tax, federal tax, FICA tax, remaining money 
                  backgroundColor: [
                    "#AD2D38","#FCEC52","#3B7080","#AFC97E"
                  ]
              }],
          
              // These labels appear in the legend and in the tooltips when hovering different arcs
              labels: [
                  'State Tax',
                  'Federal Tax',
                  'FICA Tax',
                  'Disposable Income'
              ]
          },
          options: {
              cutoutPercentage: 50,
              events: ['click']
        }
        });


    });
    
}




//.data.prices[21]

//item id 26-30
//item 21-25
//drop down menu for apartment choices 
// look up food prices/average cost of groceries + size of family
// us average cost of living - low, high, average, where ur city sits 
// graphs 4 days  




});