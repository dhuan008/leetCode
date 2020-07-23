/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let ans = -2147483647,
        maxSum = 0;
    for (let i = 0; i < nums.length; i++) {
        maxSum = maxSum + nums[i];
        if (ans < maxSum) {
            ans = maxSum;
        }
        if (maxSum < 0) {
            maxSum = 0;
        }
    }
    return ans;
};