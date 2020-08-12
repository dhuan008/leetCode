/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    let dist = 0;

    if (xBits.length > yBits.length) {
        yBits = yBits.padStart(xBits.length, '0');
    }
    else {
        xBits = xBits.padStart(yBits.length, '0');
    }

    for (let i = 0; i < xBits.length; i++) {
        if (xBits[i] !== yBits[i]) {
            dist++;
        }
    }
    return dist;
};