/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
    let result = '1',
        count = 1,
        current = '';
	for (let i = n; i > 1; i--) {
		for (let i = 0; i < result.length; i++) {
			if (result[i] === result[i + 1]) {
				count++;
			} 
            else {
				current += `${count}${result[i]}`;
				count = 1;
			}
		}
		result = current;
        current = '';
	}
	return result;
};