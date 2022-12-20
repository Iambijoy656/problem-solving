// --- Max Character and character Count

// ----- Direction-----
// Given a string , return the character that is most commonly used in the string

// -----example -----

// maxChar("abcccccccd")===="c"
// maxChar("apple 1231111")===="1"


// time complexity O(n)
// space ComplexityO(n)
function maxChar(str) {
    const charMap = {};
    let max = 0
    let maxChar = 0;
    for (const char of str) {

        charMap[char] = (charMap[char] || 0) + 1;


    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }

    }
    console.log(maxChar, max);

}

maxChar("abcccccccd")