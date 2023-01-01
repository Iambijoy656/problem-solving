// Problem-28

// Given two haystacks needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.



// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.


// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

//time complexity O(n*m)
//space complexity o(1)
// var strStr = function (haystack, needle) {
//     if (needle === '') {
//         return 0;
//     }

//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         let j = 0
//         for (j; j < needle.length; j++) {
//             console.log(i, j)
//             if (haystack[i + j] !== needle[j]) {
//                 break;
//             }
//         }
//         if (j === needle.length) {
//             return i;
//         }
//     }
//     return -1;

// };

// console.log(strStr('hello', 'll'))





// Solve using KMP Algorithm
//time complexity O(n)
//space complexity O(n)

function buildingPrefixTable(s) {
    const table = [0]
    let i = 1
    let j = 0
    while (i < s.length) {
        if (s[i] === s[j]) {
            j++;
            table[i] = j
            i++


        } else if (j > 0) {
            j = table[j - 1]

        } else {
            table[i] = 0;
            i++

        }


    }
    console.log(table);
    return table;

}

/**
 *         i
  aabaabaaab
        
  aabaaab [ 0, 1, 0, 1, 2, 2, 3 ]
        j

           i
    abceabcd

    abcd [0,0,0,0]
       j
 */

var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0;
    }

    const prefixTable = buildingPrefixTable(needle)
    console.log(prefixTable);

    let i = 0;
    let j = 0;

    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else if (j > 0) {
            j = prefixTable[j - 1]
        } else {
            i++
        }

    }
    return j === needle.length ? i - j : -1



};

console.log(strStr('aabaabaaab', 'aabaaab'))