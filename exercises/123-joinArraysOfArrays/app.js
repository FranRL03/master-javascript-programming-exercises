function joinArrayOfArrays(arr) {
  // your code here
  let aux = [];

  for(let e in arr)
    aux = aux.concat(arr[e]);

  return aux;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
