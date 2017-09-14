angular.module("budgetApp").controller("incomeCtrl", function($scope, budgetService){



    function whatTheHeck(trueFile){
    if($scope.filingStatus === "1"){
        trueFile = "single";
    }
    else if($scope.filingStatus === "2"){
        trueFile = "married";
    }
    else if($scope.filingStatus === "3"){
        trueFile = "married_separately";
    }
    else if($scope.filingStatus === "4"){
        trueFile = "head_of_household";
    }
    return trueFile
}


    




    function addData(chart, label, color, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.backgroundColor.push(color);
        });
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }


  var ctx = document.getElementById("myChart").getContext('2d');
  
    
$scope.addthestuff = function(){
    var mainrent = $scope.mainincome/3;
    addData(myPieChart, "Rent", "green", mainrent);
    
};

$scope.bigfunction = function(){
    var daData = {
        "pay_rate": $scope.payRate,
        "state": $scope.state,
        "filing_status": whatTheHeck($scope.filingStatus),
    }
    
    budgetService.incomeTaxMe(daData).then(function(response){
        console.log(response);
        var expInc = $scope.payRate - (response.data.annual.state.amount) - (response.data.annual.federal.amount) - (response.data.annual.fica.amount);
        var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: {
              datasets: [{
                  label: "Annual Income Tax",
                  data: [response.data.annual.state.amount, response.data.annual.federal.amount, response.data.annual.fica.amount, expInc],    
                  // state tax, federal tax, FICA tax, remaining money 
                  backgroundColor: [
                    "#AD2D38","#FCEC52","#3B7080","#3A5743"
                  ]
              }],
          
              // These labels appear in the legend and in the tooltips when hovering different arcs
              labels: [
                  'State',
                  'Federal',
                  'FICA',
                  'Expendable Income'
              ]
          },
          options: {
        }
        });

    });





}

})

