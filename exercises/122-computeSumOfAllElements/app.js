function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0;

  for(let e in arr)
    sum += arr[e]

  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
