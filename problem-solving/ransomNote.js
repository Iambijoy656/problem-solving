// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true


var canConstruct = function (ransomNote, magazine) {
    const hashTable = {};
    for (let elm of magazine) {
        hashTable[elm] = (hashTable[elm] || 0) + 1;
    }

    for (let e of ransomNote) {
        if (!(e in hashTable) || hashTable[e] === 0) {
            return false;
        }

        hashTable[e] -= 1;

    }
    return true;
}


console.log(canConstruct("aa", "aab"));



