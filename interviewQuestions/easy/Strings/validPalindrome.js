/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    if (s.length <= 1) {
        return true;
    }
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let halfLength = s.length / 2;
    for (let i = 0; i < halfLength; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};