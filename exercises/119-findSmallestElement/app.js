function findSmallestElement(arr) {
    // your code here
    let small = arr[0];

    if(arr.length == 0)
        return 0;

    for(e in arr)
        if(small > arr[e])
            small = arr[e];

    return small;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1