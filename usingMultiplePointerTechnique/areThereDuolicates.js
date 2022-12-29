/**
 * Write a function called areThereDuplicates which accepts a sorted array of integers
 * The function should  return true if there is any duplicates and false if there is no duplicates
 */
// similar problem 287 leetcode

function areThereAnyDuplicates(arr) {
    let i = 0;
    let j = 1;
    while (i < arr.length) {
        if (arr[i] === arr[j]) {
            return true;
        }
        i++;
        j++;
    }
    return false;

}

console.log(areThereAnyDuplicates([1, 1, 1, 1, 1, 2]))
console.log(areThereAnyDuplicates([-2, -1, 0, 1, 2]))