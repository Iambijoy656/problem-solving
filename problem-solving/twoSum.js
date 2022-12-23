// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// time complexity o(n^2)
// function twoSum(nums, target) {
//     for (var i = 0; i < nums.length - 1; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             // console.log(i, j)
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }

// }

// console.log(twoSum([2, 7, 11, 15], 9));

/**
 i
[3,2,4]
   j
 */


//    Efficient way using hashTable

function twoSum(nums, target) {
    const hashTable = {};
    for (var i = 0; i < nums.length; i++) {

        const want = target - nums[i];
        console.log(nums[i])
        console.log(want);

        if (want in hashTable) {

            return [hashTable[want], i];
        }
        hashTable[nums[i]] = i;
    }
    console.log(hashTable)
}

console.log(twoSum([3, 2, 4], 6));
