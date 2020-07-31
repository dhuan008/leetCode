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