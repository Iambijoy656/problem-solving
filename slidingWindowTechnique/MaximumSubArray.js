//LeetCode -53

// Given an integer array nums, find the 
// subarray
//  which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23


var maxSubArray = function (nums) {
    let current_sum = nums[0]

    let max_sum = current_sum
    for (var i = 1; i < nums.length; i++) {
        current_sum = Math.max(current_sum + nums[i], nums[i])

        max_sum = Math.max(current_sum, max_sum)
    }
    return max_sum;

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// [-2, 1, -3, 4, -1]
//                      max_sum = 4;
// [-2, 1] cur_sum = 1
// [1, -3] cur_sum = -2
// [-2, 4] cur_sum = 4
// [-2, 4] cur_sum = 4
// [4,-1] cur_sum = 3
// kadane's algorithm