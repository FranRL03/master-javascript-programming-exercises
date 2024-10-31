 function getLongestWordOfMixedElements(arr) {
    // your code here
    let longest = '';

    if(arr.length == 0)
        return '';

    for(let e of arr)
        if(typeof e === 'string' && e.length > longest.length)
            longest = e;

    return longest;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
