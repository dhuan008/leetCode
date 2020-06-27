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

/**
 * @param {number} x
 * @return {number}
 * Overflow testing if 32 bit doesn't work because JS is 64 bit
 */
const reverse = x => {
    let reversedInt = 0,
        pop = 0,
        pos = true;
    if (x < 0) {
        pos = false;
    }
    while (x) {
        pop = x % 10;
        x = parseInt(x/10);
        reversedInt = reversedInt * 10 + pop;
        if (reversedInt < 0 && pos) {
            return 0;
        }
        if (reversedInt >= 0 && !pos) {
            return 0;
        }
    }
    return reversedInt;
};