/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    while (n > 1) {
        if (n % 3 !== 0) {
            break;
        }
        n = n / 3;
    }
    return n === 1;
};

// Alternative solution
const isPowerOfThree = n => {
    return ( Math.log(n) / Math.log(3) ) % 1 < 0.00000000000001;
};
