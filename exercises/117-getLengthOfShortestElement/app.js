function getLengthOfShortestElement(arr) {
    // your code here
    let short = 10000000000;

    if(arr.length == 0)
        return 0;

    for(let i in arr) {
        if(short > arr[i].length)
            short = arr[i].length;
    }

    return short;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
