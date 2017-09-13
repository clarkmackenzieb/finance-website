angular.module("budgetApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home',{
        url:"/",
        templateUrl:"../views/home.html"
    })
    .state('income',{
        url:"/income",
        templateUrl:"../views/income.html"
    })
    .state('budget',{
        url:"/budget",
        templateUrl:"../views/budget.html"
    })

    $urlRouterProvider
    .otherwise('/');

});





