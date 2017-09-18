angular.module("budgetApp").controller("budgetPageCtrl", function($scope, budgetService, $http, $firebaseArray){

$scope.disposableIncome = budgetService.getdispInc();



$scope.ruralAptOne = 0;
$scope.cityAptOne = 0;
$scope.ruralAptThree = 0;
$scope.ruralAptThree = 0;
$scope.avgutil = 0;
$scope.finalrent = 0;
$scope.creditloans = 0;
$scope.studentloans = 0;
$scope.carloans = 0;



$('.studentloans').click(function() {
    $('.hiddenstudent').css({
        'visibility':'visible',
    });
});

$('.carloans').click(function() {
    $('.hiddencar').css({
        'visibility':'visible',
    });
});

$('.creditloans').click(function() {
    $('.hiddencredit').css({
        'visibility':'visible',
    });
});


// bulshit below this line


// $scope.ctx = document.getElementById("myChart").getContext('2d');

var ctx = document.getElementById("theChart").getContext('2d');

$scope.getData = function(data){
 



    $scope.ruralAptOne = budgetService.dallasInfo.prices[22].average_price;

    $scope.cityAptOne = budgetService.dallasInfo.prices[21].average_price;

    $scope.ruralAptThree = budgetService.dallasInfo.prices[24].average_price;

    $scope.cityAptThree = budgetService.dallasInfo.prices[23].average_price;

    $scope.avgutil = budgetService.dallasInfo.prices[25].average_price;

    $scope.internet = budgetService.dallasInfo.prices[33].average_price;

    $scope.gas = budgetService.dallasInfo.prices[19].average_price * 3.8 * 12 * 4;

    var renty = document.getElementById("housing");

    switch (renty.options[renty.selectedIndex].value) {
        case "citycenter1":
        $scope.finalrent = $scope.cityAptOne;
        break;
        case "rural3":
        $scope.finalrent = $scope.ruralAptThree;
        break;
        case "rural1":
        $scope.finalrent = $scope.ruralAptOne;
        break;
        case "citycenter3":
        $scope.finalrent = $scope.cityAptThree;
        break;


    }

    // if(renty[renty.selectedIndex].value=="citycenter1"){
    //     console.log("molly")

    // }
    
    
    // avg car 14galls of gas
    //id 33 - internet, 24 - gas (.55/liter)(3.8 liters/gallon)
    //$100/wk groceries 

    var thePieChart = new Chart(ctx,{
                    type: 'pie',
                    data: {
                      datasets: [{
                          label: "Monthly Budget",
                          data: [400, $scope.gas.toFixed(2), $scope.internet.toFixed(2), $scope.finalrent.toFixed(2), 500, 250, 300, 60],    
                          // state tax, federal tax, FICA tax, remaining money 
                          backgroundColor: [
                            "#97DFFC","#858AE3","#613DC1","#4E148C", "#521945", "#912F56", "#361F27", "#41337A"
                          ]
                      }],
                  
                      // These labels appear in the legend and in the tooltips when hovering different arcs
                      labels: [
                          'Groceries',
                          'Monthly Gas',
                          'Internet',
                          'Housing',
                          "Insurance",
                          "Retirement",
                          "Rainy Day",
                          "Phone",
                      ]
                  },
                  options: {
                      cutoutPercentage: 50,
                      events: ['click']
                }
                });


if(document.getElementById("studentmoney").checked){

    budgetService.addData(thePieChart, "Student Loan Payments", "#3A506B", $scope.studentloans)
            
    }

if(document.getElementById("carmoney").checked){

    budgetService.addData(thePieChart, "Car Loan Payments", "#1C2541", $scope.carloans)
            
    }

if(document.getElementById("creditmoney").checked){

    budgetService.addData(thePieChart, "Credit Payments", "#0B132B", $scope.creditloans)
            
    }

if($scope.disposableIncome >0 ){

    var finalDispInc = ((($scope.disposableIncome - $scope.creditloans - $scope.carloans - $scope.studentloans -$scope.gas - $scope.avgutil - $scope.finalrent) - 400) / 12).toFixed(2);
    
      budgetService.addData(thePieChart, "Disposable Income", "#2C0735",(finalDispInc))  
}


// if(document.getElementById("carmoney").checked){
        

            
//     }

// if(document.getElementById("creditmoney").checked){
        

            
//     }




}



// $scope.getData = function(data){
    
//     return budgetService.getData(data).then(function(response){

//         console.log(response)

//         $scope.ruralAptOne = response.data.prices[22].average_price;
//         $scope.cityAptOne = response.data.prices[21].average_price;
//         $scope.ruralAptThree = response.data.prices[24].average_price;
//         $scope.cityAptThree = response.data.prices[23].average_price;
//         $scope.avgutil = response.data.prices[25].average_price;

//         var myPieChart = new Chart($scopectx,{
//             type: 'pie',
//             data: {
//               datasets: [{
//                   label: "Monthly Budget?",
//                   data: [$scope.ruralAptOne, $scope.cityAptOne, $scope.ruralAptThree],    
//                   // state tax, federal tax, FICA tax, remaining money 
//                   backgroundColor: [
//                     "#AD2D38","#FCEC52","#3B7080","#AFC97E"
//                   ]
//               }],
          
//               // These labels appear in the legend and in the tooltips when hovering different arcs
//               labels: [
//                   'State Tax',
//                   'Federal Tax',
//                   'FICA Tax',
//                   'Disposable Income'
//               ]
//           },
//           options: {
//               cutoutPercentage: 50,
//               events: ['click']
//         }
//         });


//     });
    
// }




//.data.prices[21]

//item id 26-30
//item 21-25
//drop down menu for apartment choices 
// look up food prices/average cost of groceries + size of family
// us average cost of living - low, high, average, where ur city sits 
// graphs 4 days  




});