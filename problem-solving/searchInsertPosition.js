// problem:35

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4



//Binary search / Divide and conquer
// array must be sorted
function searchElmIndex(nums, target) {
    let low = 0;
    let hi = nums.length - 1;
    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2)
        let midVal = nums[mid]
        if (midVal === target) return mid;
        if (target > midVal) {
            low = mid + 1
        } else {
            hi = mid - 1;
        }
    }
    return low;

}

console.log(searchElmIndex([1, 3, 5, 7, 9, 10], 8))

/**
 * [1, 3, 5, 7, 9,10],  7     mid= 0+5/2 = 2.5=2
    l     m        h
 
   [1, 3, 5, 7, 9, 10],  7      mid =3+5/2 = 4
              l  m  h
               
   [1, 3, 5, 7, 9, 10],  7     mid = 3+3/2 = 3
              l  
              m  
              h
 */