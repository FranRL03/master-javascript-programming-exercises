function convertObjectToList(obj) {
  // your code here
  let list = [];
  for(let e in obj)
    list.push([e, obj[e]]);

  return list;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
