/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    let reversedInt = 0,
        pop = 0;
    while (x) {
        pop = x % 10;
        x = parseInt(x / 10);
        reversedInt = reversedInt * 10 + pop;
    }
    return reversedInt < Math.pow(-2, 31) || reversedInt > Math.pow(2, 31) ? 0 : reversedInt;
};