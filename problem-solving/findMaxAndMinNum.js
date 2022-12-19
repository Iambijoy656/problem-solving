/**
Find max and min sum 

you have been provide an array of number
you have to find Minimum number
 */

function min(arr) {
    let minNum = arr[0];
    for (let num of arr) {
        if (num < minNum) {
            minNum = num;
        }

    }
    return minNum;
}


const arr = [10, 20, 3, 40, 50, 6]
console.log(min(arr));

