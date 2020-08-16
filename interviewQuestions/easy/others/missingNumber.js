/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    let total = nums.length;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        total += i;
        sum += nums[i];
    }
    return total - sum;
};