/**
 Adding sum from an array

you have been provide an array of number
you have to sum the numbers
 */

function sum(arr) {
    //flag variable
    let sum = 0;
    for (let num of arr) {
        sum += num;
        console.log(num, sum)
    }

    return sum;
}

const arr = [10, 12, 45, 55, 25];
console.log(sum(arr));