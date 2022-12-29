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

    let left = 0;
    let right = normalizeStr.length - 1;

    while (left < right) {
        if (normalizeStr[left] !== normalizeStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

}

console.log(palindrome("amanaplanacanalpanama"))
console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome("race a car"))
console.log(palindrome(" "))
