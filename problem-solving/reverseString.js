// problem-344
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// var reverseString = function (s) {
//     return s.reverse();

// };

// console.log(reverseString(["H", "a", "n", "n", "a", "h"]))



var reverseString = function (s) {
    for (var i = 0; i < s.length / 2; i++) {
        console.log(s[i]);
        const temp = s[i]
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp



    };
    return s;
}

console.log(reverseString(["H", "a", "n", "n", "a", "h"]))

/**
 * ["H", "a", "n", "n", "a", "h"]
 * 0-4((length-1)-index)
 * 1-3(length - 1 - i)
 * 2-2
    
 */