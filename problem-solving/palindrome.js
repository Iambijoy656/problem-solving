//----Check provided string is palindrome---
//if palindrome return true otherwise false
//non alphanumeric character should be ignore
//palindrome ("race car") should return true
// palindrome ("not a palindrome")should return false



function palindrome(str) {
    // w= [0-9A-Za-z]
    //  \W= ![0-9A-Za-z]

    const re = /[\W_]/g   //g mean global
    const normalizeStr = str.toLowerCase().replace(re, '');
    console.log(normalizeStr)

    const reverseStr = normalizeStr.split('').reverse().join('')
    console.log(reverseStr);

    return normalizeStr === reverseStr;

}

console.log(palindrome("race _car"))
