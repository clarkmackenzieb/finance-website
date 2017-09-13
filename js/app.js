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
        controller: function($scope){
            var myChart = document.getElementById('myChart').getContext('2d')
            Chart.defaults.global.defaultFontFamily =  'Lato';
            Chart.defaults.global.defaultFontSize = 25;
            Chart.defaults.global.defaultFontColor = '#777';
            var lineChart = new Chart(myChart, {
              type: 'line',
              data: {
                labels:[2008,2009,2010,2011,2012,2013,2014,2015],
                datasets: [{
                  label: "Satisfaction in Points",
                  fill: false,
                  lineTension: 0.1,
                  borderColor: "blue",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'red',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'pink',
                  pointHoverBorderColor: 'red',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [5.7,5.8,5.9,6.0,6.1,6.2,6.3,6.4],
                  // backgroundColor: 'green'
                  backgroundColor: [
                    'rgba(225,226,228,0.5)'
                  ]
                }]
              },
              options: {
                responsive: true,
                scaleShowValues: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      steps: 0.5,
                      stepValue: 0.1,
                      max: 6.4,
                      min: 5.7
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      autoSkip: false
                    }
                  }]
              },
                title: {
                  display: true,
                  text: 'Happiness Levels Measured',
                  fontSize: 25
                },
                legend: {
                  display: true,
                  position: 'right',
                  labels: {
            
                 }
                },
                layout: {
                  padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                  }
                },
                tooltips:{
                  enabled: true
                }
              }
            })
        }
    })
    .state('budget',{
        url:"/budget",
        templateUrl:"../views/budget.html"
    })

    $urlRouterProvider
    .otherwise('/');

});





