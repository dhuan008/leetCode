/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
    str = str.trimLeft();
    if (!/[\d+-]/.test(str[0])) return 0;

    const number = Number(str.match(/[+-]?\d*/)); // regex means: optional(+,-) follows by zero (case " +  514 " => expect 0) or more digits
    if (Number.isNaN(number)) return 0;

    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = - (2 ** 31);
    if (number < MIN_INT) return MIN_INT;
    if (number > MAX_INT) return MAX_INT;
    return number;
};