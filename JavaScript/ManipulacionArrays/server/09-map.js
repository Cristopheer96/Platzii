const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2]],
  [7, 8, 9],
];

const flatMetod = matriz.flat();
console.log(flatMetod); // output => [ 1, 2, 3, 4, 5, 6, [ 1, 2 ], 7, 8, 9 ]



const flatMetod2 = matriz.flat(2);
console.log('version 2',flatMetod2); // output => [  1, 2, 3, 4, 5,  6, 1, 2, 7, 8,  9]
