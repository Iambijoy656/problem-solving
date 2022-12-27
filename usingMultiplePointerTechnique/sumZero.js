/**
 * Creating pointers or values that correspond to an index position and move towards the beginning , end or middle based on a certain condition

 * Very efficient for solving problems with space complexity as well
 */


// Sum Zero

// write a function called sumZero which accepts a sorted array of integers. the function should  find the first pair where the sum 0.
// return an array that includes both values that sum to zero or undefined if a pair does not exist

// Example
//sumZero([-3,-2,1,0,1,2,3]) output: [-3,3]
//sumZero([-2,0,2,3]) output: [-2,2]
//sumZero([1,2,3]) output: undefined

function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum  === 0) {
            return [arr[left],arr[right] ]
        }
        if (sum  > 0) {
           right --
        }
        if (sum  < 0) {
            left++;
        }

    }

    return undefined;


}

console.log(sumZero([-3, -2, 1, 0, 1, 2, 3]));
console.log(sumZero([-2,0,2,3]));
console.log(sumZero([1,2,3]));

// [-3, -2, 1, 0, 1, 2, 3]
    // l                r
    // -3+3 =0 [-3,3]

// [-2,0,2,3]
 // l    r
    // -2+3 = 1
    // -2+2 =0 [-2,2]

// [1,2,3]
 // l   
// r 
// 1+3 = 4
 // 1+2 = 3
 // 1+1 = 0