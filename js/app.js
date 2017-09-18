angular.module("budgetApp", ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider){

    

    $stateProvider
    .state('home',{
        url:"/",
        templateUrl:"views/home.html"
    })
    .state('income',{
        url:"/income",
        templateUrl:"views/income.html",
        controller: "incomeCtrl",

    
    })
    .state('budget',{
        url:"/budget",
        templateUrl:"views/budget.html",
        controller: "budgetPageCtrl",
    })

    $urlRouterProvider
    .otherwise('/');

});





