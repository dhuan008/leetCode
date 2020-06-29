/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        }
        else {
            map.set(s[i], 1);
        }
    }
    for (char of t) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) < 0) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
};