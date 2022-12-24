
// 387. First Unique Character in a String [Leetcode]
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1


function firstUniqChar(s) {
    const hashT = {};
    for (const elm of s) {
        hashT[elm] = (hashT[elm] || 0) + 1;
    }
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
        console.log(hashT[s[i]])
        if (hashT[s[i]] === 1) {
            return i;
        }
    }
    return -1;
    console.log(hashT);
}

console.log(firstUniqChar("loveleetcode"));