function getLargestElement(arr) {
  // your code here
  let largest = arr[0];

  if(arr.length == 0)
    return 0;

  for(let e in arr)
    if(largest < arr[e])
      largest = arr[e]

  return largest;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;