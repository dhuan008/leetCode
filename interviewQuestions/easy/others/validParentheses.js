/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    let stack = [];
    for (let par of s) {
        if (par === '(') stack.push(')');
        else if (par === '[') stack.push(']');
        else if (par === '{') stack.push('}');
        else if (stack.pop() !== par) return false;
    }
    return stack.length === 0;
};