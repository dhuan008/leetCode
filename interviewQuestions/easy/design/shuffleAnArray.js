/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffled = this.nums.slice();
    const n = shuffled.length;
    let temp;
    const swap = (arr, i, j) => {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (let i = 0; i < n; i++) 
        swap(shuffled, i, Math.floor(Math.random() * n));
    
    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */