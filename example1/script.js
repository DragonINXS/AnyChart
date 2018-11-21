anychart.onDocumentReady(function () {
  
  var data = [
      {x: 'A', value: 20}, // ingredient/wine and value would be the count of it's pairings
      {x: 'B', value: 12},
      {x: 'C', value: 17},
      {x: 'A&B', value: 4}, // would be the shared pairings
      {x: 'B&C', value: 5},
      {x: 'A&C', value: 7},
      {x: 'A&B&C', value: 1}
  ];

  // Creates Venn chart.
  var chart = anychart.venn(data);

  chart.title('Create a Venn Chart');
  chart.container('container');
  chart.draw();
});