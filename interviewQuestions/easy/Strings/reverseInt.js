/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    let reversedInt = 0;
    while (x != 0) {
        let pop = x % 10;
        x = Math.floor(x/10);
        reversedInt = reversedInt * 10 + pop;
    }
    if (reversedInt < Math.pow(-2, 31) || reversedInt > Math.pow(2, 31)) {
        return 0;
    }
    return reversedInt;
};