function getElementsUpTo(array, n) {
  // your code here
  let element = array.slice(0, n)

  return element;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
