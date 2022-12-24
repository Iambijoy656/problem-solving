// leetcode 242
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


function isAnagram(s, t) {
    const normalizationS = s.replace(/[^\w]/g, '').toLowerCase();
    const normalizationT = t.replace(/[^\w]/g, '').toLowerCase();

    const frequency1 = {}
    const frequency2 = {}

    for (const elm of normalizationS) {
        frequency1[elm] = (frequency1[elm] || 0) + 1;
    }
    for (const elm of normalizationT) {
        frequency2[elm] = (frequency2[elm] || 0) + 1;
    }

    if (Object.keys(frequency1).length !== Object.keys(frequency2).length) {
        return false;
    }

    for (let key in frequency1) {
        if (frequency1[key] !== frequency2[key] || !key in frequency2) {
            return false;
        }
    }

    return true;

    console.log(frequency1, frequency2);
}

console.log(isAnagram('rail safety', 'fairy tales'))