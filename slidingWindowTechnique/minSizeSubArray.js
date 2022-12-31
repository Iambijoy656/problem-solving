
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0


var minSubArrayLen = function (target, nums) {
    let result = Infinity
    let left = 0;
    let val_sum = 0

    for (var i = 0; i < nums.length; i++) {
        val_sum += nums[i]
        console.log(val_sum)
        while (val_sum >= target) {
            result = Math.min(result, i + 1 - left)
            val_sum -= nums[left]
            console.log(left)
            left++;
            console.log(left)
        }


    }
    result = result === Infinity ? 0 : result;
    console.log(result);
    return result;

};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(4, [1, 4, 4]));


// [2, 3, 1, 3, 4, 3]  //i+1 -l = 4-0 = 4         minLength = 2
// [2, 3, 1, 3] >= 7 //length 4
//     [3, 1, 3] >= 7 //length 3
//     [1, 3, 4] >= 7 //length 3
//     [3, 4] >= 7 //length 2
//     [4, 3] >= 7 //length 2