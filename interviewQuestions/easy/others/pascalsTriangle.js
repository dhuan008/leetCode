/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
    const finalArray = [];
    for (let i = 0; i < numRows; i++) {
        const currentArray = [];
        let j = 0;
        while (j <= i) {
            if (j === i || j === 0) {
                currentArray.push(1);
            }
            else {
                currentArray.push(finalArray[i - 1][j - 1] + finalArray[i - 1][j]);
            }
            j++;
        }
        finalArray.push(currentArray);
    }
    return finalArray;
};