// Group Anagram 49

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]




function groupAnagrams(strs) {
    const hashT = {}
    for (const elm of strs) {
        const sorted = elm.split('').sort().join('')

        if (hashT[sorted]) {
            hashT[sorted].push(elm)
        } else {
            hashT[sorted] = [elm]
        }


    }
    // console.log(hashT);
    return Object.values(hashT);

}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


