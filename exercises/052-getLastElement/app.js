function getLastElement(array) {
  // Add your code after this line
  let lastElement = 0;

  if(array.length == 0)
    return undefined;

  for (let index = 0; index < array.length; index++) {
    lastElement = array[index];
  }

  return lastElement;
}

console.log(getLastElement([1,2,3,5]))
