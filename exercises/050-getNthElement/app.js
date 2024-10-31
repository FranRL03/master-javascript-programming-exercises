function getNthElement(array, n) {
  // Add your code after this line
  let number = 0;

  if(array.length == 0){

    return undefined;
  }

  for (let i = 0; i < array.length; i++) {
    number = array[n]
  }

  return number;
}

console.log(getNthElement([1,2,3], 0))
