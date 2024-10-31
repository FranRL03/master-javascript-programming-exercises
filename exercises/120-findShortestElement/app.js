function findShortestElement(arr) {
    // your code here
    let short = '999999999';

    if(arr.length == 0)
        return '';

    for(let e in arr)
        if(short.length > arr[e].length)
            short = arr[e]

    return short;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'