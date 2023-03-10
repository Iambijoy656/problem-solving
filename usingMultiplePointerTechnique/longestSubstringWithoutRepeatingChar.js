// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 0;
    let max = 0;
    const uniqueSet = new Set();
    console.log(uniqueSet)

    while (i < s.length) {
        if (!uniqueSet.has(s[i])) {
            uniqueSet.add(s[i])
            max = Math.max(max, uniqueSet.size)
            i++
        } else {
            uniqueSet.delete(s[j])
            j++;

        }


        console.log(uniqueSet, s[i], max)
    }
    return max;
};
console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring("abcabcbb"));





// "pwwkew"