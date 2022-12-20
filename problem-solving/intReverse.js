/**
 ---- Directions
1. Given an integer , return an integer that is reverse
2. rendering of numbers
------Example-----

reverseInt(15)=== 51
reverseInt(981)=== 189
reverseInt(500)=== 5
reverseInt(-15)=== 51
reverseInt(-90)=== -9

 */

function reverseInt(num) {
    let reverseNum = num.toString().split('').reverse().join('')
    if (reverseNum.endsWith('-')) {
        reverseNum = '-' + reverseNum.slice(0, reverseNum.length - 1)
    }

    reverseNum = (parseInt(reverseNum));
    return reverseNum;
}

console.log(reverseInt(-90))
console.log(reverseInt(188))
console.log(reverseInt(500))
console.log(reverseInt(189) === 981)