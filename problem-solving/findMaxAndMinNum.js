/**
Find max and min sum 

you have been provide an array of number
you have to find Minimum number
 */

// function min(arr) {
//     let minNum = arr[0];
//     for (let num of arr) {
//         if (num < minNum) {
//             minNum = num;
//         }

//     }
//     return minNum;
// }


// const arr = [10, 20, 3, 40, 50, 6]
// console.log(min(arr));



function min(arr) {
    const minNum = Math.min(...arr)
    return minNum;
}


const arr = [10, 20, 3, 40, 50, 6]
console.log(min(arr));





/**
Find max and min sum 

you have been provide an array of number
you have to find Minimum number
 */

// function min(arr2) {
//     let maxNum = arr[0];
//     for (let num of arr2) {
//         if (num > maxNum) {
//             minNum = num;
//         }

//     }
//     return minNum;
// }


// const arr2 = [10, 20, 3, 40, 50, 6]
// console.log(min(arr2));



function min(arr2) {
    const minNum = Math.max(...arr2)
    return minNum;
}


const arr2 = [10, 20, 3, 40, 50, 6]
console.log(min(arr2));