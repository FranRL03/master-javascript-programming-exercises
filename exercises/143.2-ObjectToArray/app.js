function listAllValues(obj) {
  // your code here
  let list = [];
  for (let e in obj)
    list.push(obj[e])

  return list;
  
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
