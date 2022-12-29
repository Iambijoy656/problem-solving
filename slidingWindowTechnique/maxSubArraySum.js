// Write a function called maxSubArraySum Which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array


// Using nested loop 
// Big O(n^2)

// function maxSubArraySum(arr, num) {
//     if (arr.length < num) {
//         return null;
//     }
//     let max = -Infinity
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let tempSum = 0;
//         for (let j = 0; j < num; j++) {

//             tempSum += arr[i + j]

//         }
//         // console.log(tempSum)
//         max = Math.max(tempSum, max);
//     }
//     return max;
// }

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));



//  Efficient way using sliding window
function maxSubArraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let max = 0;
    let tempSum = 0
    for (var i = 0; i < num; i++) {
        max += arr[i]
        console.log(max);

    }
    tempSum = max
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        console.log(tempSum)

        max = Math.max(tempSum, max)
    }
    return max;



}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));

// [1, 2, 5, 2, 8, 1, 5]   max=3
// 1 + 2 = 3                max= 7
// 3 - 1 + 5 = 7
// 7- 2 +2 = 7
