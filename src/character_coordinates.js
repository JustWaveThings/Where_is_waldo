// how best to add all coordinates within a bounding box to an array...

/* const waldoArray = [];
function waldoCoordinates(input) {
  johnArray.push(input);
  console.log(johnArray);
  return johnArray;
} */

const rawJohnHits = [
  '[72, 46]',
  '[73, 46]',
  '[74, 46]',
  '[74, 45]',
  '[72, 45]',
  '[73, 45]',
  '[75, 46]',
  '[74, 47]',
  '[75, 47]',
  '[73, 47]',
  '[72, 47]',
  '[72, 48]',
  '[73, 48]',
  '[74, 48]',
  '[71, 49]',
  '[70, 49]',
  '[72, 49]',
  '[73, 49]',
  '[74, 49]',
  '[75, 48]',
  '[75, 49]',
  '[76, 49]',
  '[76, 50]',
  '[77, 50]',
  '[77, 51]',
  '[76, 52]',
  '[77, 52]',
  '[76, 51]',
  '[75, 52]',
  '[75, 52]',
  '[74, 53]',
  '[75, 53]',
  '[73, 53]',
  '[72, 53]',
  '[71, 53]',
  '[71, 52]',
  '[70, 51]',
  '[70, 50]',
  '[71, 50]',
  '[72, 50]',
  '[73, 50]',
  '[74, 50]',
  '[75, 50]',
  '[71, 51]',
  '[72, 51]',
  '[73, 51]',
  '[75, 51]',
  '[74, 51]',
  '[74, 52]',
  '[73, 52]',
  '[72, 52]',
];

const parsedJohnHits = rawJohnHits.map(item => JSON.parse(item)).sort((a, b) => a[0] - b[0]);

const rawWaldoHits = [
  '[91, 183]',
  '[91, 182]',
  '[92, 182]',
  '[92, 183]',
  '[93, 183]',
  '[94, 183]',
  '[93, 182]',
  '[94, 184]',
  '[93, 184]',
  '[92, 184]',
  '[91, 184]',
  '[91, 185]',
  '[92, 185]',
  '[93, 185]',
  '[94, 185]',
  '[94, 186]',
  '[93, 186]',
  '[92, 186]',
  '[91, 186]',
];

const parsedWaldoHits = rawWaldoHits.map(item => JSON.parse(item)).sort((a, b) => a[0] - b[0]);

const rawMushroomHits = ['[41, 103]', '[42, 103]', '[42, 102]', '[41, 102]', '[40, 103]', '[43, 102]', '[43, 103]'];

const parsedMushroomHits = rawMushroomHits.map(item => JSON.parse(item)).sort((a, b) => a[0] - b[0]);

export { parsedMushroomHits, parsedJohnHits, parsedWaldoHits };
