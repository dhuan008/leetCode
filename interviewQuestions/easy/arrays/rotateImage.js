/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
    for (let i = 0, temp = 0; i < matrix.length; i++){
        for (let j = i + 1; j < matrix[i].length; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0 ; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};