const intersect = (nums1, nums2) => {
    const set = new Set();
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            result.push(nums2[i]);
            //set.delete(nums2[i]);
        }
    }
    return result;
};