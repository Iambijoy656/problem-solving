// leetcode -231
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:
// Input: n = 3
// Output: false

//Using Loop
var isPowerOfTwo = function (n) {
    if (n < 1) {
        return false;
    }
    let divideNumber = n;
    while (divideNumber !== 1) {
        if (divideNumber % 2 !== 0) {
            return false;
        }
        divideNumber = divideNumber / 2


    }
    return true;


};
console.log(isPowerOfTwo(16))

// console.log(16 % 2)
// console.log(8 % 2)
// console.log(4 % 2)
// console.log(2 % 2)
// console.log(1 % 2)

// console.log(20 % 2)
// console.log(10 % 2)
// console.log(5 % 2)
// console.log(1 % 2)

/**
    16/2 = 8
    8/2 = 4
    4/2 = 2
    2/2 = 1
 */



// Without loop/ recursion or Bitwise solution
var isPowerOfTwo = function (n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;


};
console.log(isPowerOfTwo(16))

//-------------------Explanation----------------
//     8 & 7
//     8 = 1000(binary)
//     7 = 0111(binary)
//Ans: 0 = 0000(0 and 1 er modde 0 piroty pabe always)

//     11 & 11
//     11 = 1011(binary)
//     11 = 1011(binary)
//Ans: 0 = 0000(0 and 1 er modde 0 piroty pabe always)


// if 2^n & 2^n-1 = 0
// example:
// console.log(8 & 7);
// console.log(16 & 15);
// console.log(32 & 31);




