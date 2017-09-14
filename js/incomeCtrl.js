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


    
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
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
    var checky = true;
    if($scope.payRate <= 0 || typeof $scope.payRate !== "number"){
        
        document.getElementById("payrateinp").placeholder="Please enter a valid input (ex. 15000)";
        document.getElementById("payrateinp").style.border = "solid 5px red";
        document.getElementById("budgetbtn").style.display = "none"; 
        checky = false;
        }

    if ($scope.state === undefined || typeof $scope.state != "string" || $scope.state.length > 2 || $scope.state.length <= 0){
        $scope.state = "";
        document.getElementById("stateinp").placeholder="Please enter a valid input (ex. TN)";
        document.getElementById("stateinp").style.border = "solid 5px red";
        document.getElementById("budgetbtn").style.display = "none"; 
        checky = false;
    }

    if($scope.filingStatus <= 0 || $scope.filingStatus > 4 || typeof $scope.filingStatus != "string"){
        $scope.filingStatus = "";
        document.getElementById("filinginp").style.border = "solid 5px red";
        document.getElementById("filinginp").placeholder="Please enter a valid input (ex. 1)";

        document.getElementById("budgetbtn").style.display = "none"; 
        checky = false;
    }

    // if(checky === false){
    //     if($scope.payRate > 0 && typeof $scope.payRate === "number"){
    //         document.getElementById("payrateinp").style.border = "none";
    //     }
    //     if (typeof $scope.state === "string" && $scope.state.length <= 2){
    //         document.getElementById("stateinp").style.border = "none";
    //     }
    //     if($scope.filingStatus > 0 && $scope.filingStatus <= 4){
    //         document.getElementById("filinginp").style.border = "none";
    //     }
  
    else if(checky === true){
    var daData = {
        "pay_rate": $scope.payRate,
        "state": ($scope.state).toUpperCase(),
        "filing_status": whatTheHeck($scope.filingStatus),
    }

    
        
   
    //bug- chart acts weird after inputting new info
    budgetService.incomeTaxMe(daData).then(function(response){

    var expInc = $scope.payRate - (response.data.annual.state.amount) - (response.data.annual.federal.amount) - (response.data.annual.fica.amount);
    
    document.getElementById("budgetbtn").style.display = "flex"; 
        
        var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: {
              datasets: [{
                  label: "Annual Income Tax",
                  data: [(response.data.annual.state.amount).toFixed(2), (response.data.annual.federal.amount).toFixed(2), (response.data.annual.fica.amount).toFixed(2), (expInc).toFixed(2)],    
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
        }
        });
        

    
    
    });
}  
  
}


})

