angular.module("budgetApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    

    $stateProvider
    .state('home',{
        url:"/",
        templateUrl:"../views/home.html"
    })
    .state('income',{
        url:"/income",
        templateUrl:"../views/income.html",
        controller: function($scope, budgetService){


            $scope.thingy = budgetService.getFederalTax(2017);


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
          var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: {
              datasets: [{
                  label: "This is a Pie",
                  data: [10, 20, 30],
                  backgroundColor: [
                    "#AD2D38","#FCEC52","#3B7080"
                  ]
              }],
          
              // These labels appear in the legend and in the tooltips when hovering different arcs
              labels: [
                  'Red',
                  'Yellow',
                  'Blue'
              ]
          },
          options: {
        }
        });
            
        $scope.addthestuff = function(){
            var mainrent = $scope.mainincome/3;
            addData(myPieChart, "Rent", "green", mainrent);
            
        };

    }
    })
    .state('budget',{
        url:"/budget",
        templateUrl:"../views/budget.html"
    })

    $urlRouterProvider
    .otherwise('/');

});





