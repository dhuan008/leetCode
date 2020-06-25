/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    const row = new Set(),
        col = new Set(),
        box = new Set();
    let rowVal, colVal, boxVal;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            rowVal = board[i][j];
            colVal = board[j][i];
            boxVal = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][i % 3 * 3 + j % 3];

            if (rowVal !== '.' && row.has(rowVal)) {
                return false;
            }
            else {
                row.add(rowVal);
            }
            if (colVal !== '.' && col.has(colVal)) {
                return false;
            }
            else {
                col.add(colVal);
            }
            if (boxVal !== '.' && box.has(boxVal)) {
                return false;
            }
            else {
                box.add(boxVal);
            }
        }
        row.clear();
        col.clear();
        box.clear();
    }
    return true;
};