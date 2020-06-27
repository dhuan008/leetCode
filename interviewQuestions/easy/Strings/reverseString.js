/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
    for (let i=0, j=s.length/2; i<j; i++) {
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
    }
};