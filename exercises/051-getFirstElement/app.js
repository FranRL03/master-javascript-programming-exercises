function getFirstElement(array) {
  // Add your code after this line
  let firstElement = 0;

  if (array.length == 0) 
    return undefined;

  for(let i = 0; i < array.length; i++) {
    firstElement = array[0];
  }

  return firstElement;
}

let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1