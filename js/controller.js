angular.module("budgetApp").controller("budgetCtrl", function($scope, budgetService, $firebaseArray){



var ref = firebase.database().ref()
var arr = $firebaseArray(ref)



})
