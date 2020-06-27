/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    let reversedInt = 0,
        pop = 0;
    while (x) {
        pop = x % 10;
        x = parseInt(x/10);
        reversedInt = reversedInt * 10 + pop;
    }
    if (reversedInt < Math.pow(-2, 31) || reversedInt > Math.pow(2, 31)) {
        return 0;
    }
    return reversedInt;
};