/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    if (!strs[0]) {
        return '';
    }
    let result = '';
    for (let i = 0; strs[0][i] !== undefined; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
};