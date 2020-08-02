/**
 * @param {string} s
 * @return {number}
 */

const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

const romanToInt = s => {
    let ans = 0;
    let i = 0;
    while (i < s.length - 1) {
        if (map[s[i]] < map[s[i + 1]]) {
            ans -= map[s[i]];
        }
        else {
            ans += map[s[i]];
        }
        i++;
    }
    return ans + map[s[i]];
};