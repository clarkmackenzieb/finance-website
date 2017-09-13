angular.module("budgetApp").controller("budgetCtrl", function($scope){



anychart.onDocumentLoad(function() {
    // create an instance of a pie chart with data
    var chart = anychart.line([
      1,2,3,4,5]);

    chart.container(angular.element(document.querySelector('#thecontainer')));
    chart.draw();


  });

  

})

// anychart.onDocumentLoad(function() {
//     // create an instance of a pie chart with data
//     var chart = anychart.pie([
//       ["Chocolate", 5],
//       ["Rhubarb compote", 2],
//       ["Crêpe Suzette", 2],
//       ["American blueberry", 2],
//       ["Buttermilk", 1]
//     ]);
//     chart.title("Top 5 pancake fillings");
//     // pass the container id, chart will be displayed there
//     chart.container("container");
//     // call the chart draw() method to initiate chart display
//     chart.draw()
//