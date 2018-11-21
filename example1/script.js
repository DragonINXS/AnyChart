// anychart.onDocumentReady(function () {
  
//   var data = [
//     {x: 'A', value: 20}, // ingredient/wine and value would be the count of it's pairings
//     {x: 'B', value: 12},
//     {x: 'C', value: 17},
//     {x: 'A&B', value: 4}, // would be the shared pairings
//     {x: 'B&C', value: 5},
//     {x: 'A&C', value: 7},
//     {x: 'A&B&C', value: 1}
//   ];

//   // Creates Venn chart.
//   var chart = anychart.venn(data);

//   chart.title('Create a Venn Chart');
//   chart.container('container');
//   chart.draw();
// });


anychart.onDocumentReady(function () {
  
  var data = [
    {x: 'basil', value: basil.winePairings.length}, // ingredient/wine and value would be the count of it's pairings
    {x: 'lemon', value: lemon.winePairings.length},
    {x: 'crab', value: crab.winePairings.length},
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

const basil = {
  winePairings: [
    'cabernet sauvignon',
    'champagne (rose)',
    'chardonay (no oak)',
    'chateauneuf-du-pape (white)',
    'chianti',
    'gavi',
    'merlot',
    'nebbiolo',
    'orvieto',
    'pinot grigio',
    'rose',
    'sanglovese',
    'sauvignon blanc',
    'shiraz/syrah',
    'soave',
    'zinfandel'
  ],
  foodPairings: [
    'bell peppers', 
    'cheese (feta, goat, mozzarella, parmesan, recorino, ricotta',
    'chicken',
    'eggplant',
    'eggs',
    'fish (grilled, poached)', 
    'garlic',
    'italian cusine',
    'lamb',
    'lemon',
    'mediterranean cuisine',
    'mint',
    'olive oil',
    'oregano',
    'pasta (dishes, sauces)'
  ]
};

const lemon = {
  winePairings: [
    'burgundy (white)',
    'chablis',
    'muscadet',
    'pinot grigio',
    'riesling',
    'sancerre',
    'sauvignon blanc'
  ]
};

const crab = {
  winePairings: [
    'beer (light lager, pilsner, wheat',
    'burgundy (white)',
    'chablis',
    'champagne',
    'chardonnay (california, french, no oak)',
    'chennin blanc',
    'cognac',
    'maderia',
    'mersault',
    'pinot bianco/pinot blanc',
    'pinot grigio',
    'riesling',
    'rose',
    'savignon blanc',
    'savennieres',
    'sparkling wine',
    'vinho verde',
    'viognier',
  ]
};

