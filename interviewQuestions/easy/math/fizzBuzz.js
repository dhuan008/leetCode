/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n => {
    const str = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            str.push('FizzBuzz');
        } else if (i % 5 == 0) {
            str.push('Buzz');
        } else if (i % 3 == 0) {
            str.push('Fizz');
        } else {
            str.push(i.toString());
        }
    }
    return str;
};