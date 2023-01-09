// Using Recursion

function flattenArray(arr) {
    let newArr = [];

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (Array.isArray(arr[i])) {
            //todo
            newArr = newArr.concat(flattenArray(arr[i]))

        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;

}

console.log(flattenArray([1, 2, 3, 4, [5, 6]]));//[1, 2, 3, 4, 5, 6]
// flattenArray([1, [2, [3, 4], [[5]]]]) //[1, 2, 3, 4, 5]
// flattenArray([[1], [2], [3]]) //[1, 2, 3]

/**
  1, 2, 3, 4, [5, 6]
 */