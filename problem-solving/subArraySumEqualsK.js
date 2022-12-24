// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.


// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2


function subArraySum(nums, k) {
    const hashMap = {
        0: 1
    }
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        console.log([sum - k])
        if ([sum - k] in hashMap) {
            result += hashMap[sum - k]

        }
        hashMap[sum] = (hashMap[sum] || 0) + 1

    }
    console.log(hashMap);
    console.log(result);
    return result;

}

console.log(subArraySum([1, 1, 1], 2))