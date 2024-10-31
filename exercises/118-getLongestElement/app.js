function getLongestElement(arr) {
    // your code here
    let longest = '';

    if(arr.length == 0)
        return '';

    for(let e in arr)
        if(longest.length < arr[e].length)
            longest = arr[e];

    return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
