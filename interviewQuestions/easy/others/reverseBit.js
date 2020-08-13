/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = n => {
    let result = 0,
        length = 32;
    while (length > 0) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
        length--;
        console.log(result.toString(2));
    }
    return result;
};