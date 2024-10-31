function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let num = -Infinity;

    for(let e of arr)
        if(typeof e === 'number' && e > num)
            num = e;
    
    if(num === -Infinity)
        return 0;
    else   
     return num;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
