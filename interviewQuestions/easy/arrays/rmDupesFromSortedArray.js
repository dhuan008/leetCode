/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    if (nums.length < 1) return 0;
    if (nums.length === 1) return 1;
    const set = new Set();
    let lastGoodIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i])) {
            set.add(nums[i]);
            nums[lastGoodIndex++] = nums[i];
        }
    }
    return lastGoodIndex;
};