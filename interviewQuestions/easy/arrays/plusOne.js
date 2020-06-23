const plusOne = digits => {
    let temp = 0;
    digits[digits.length - 1]++;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] >= 10) {
            temp = (digits[i] / 10);
            digits[i] = digits[i] % 10;
            if (i === 0) {
                digits.unshift(temp);
            } else {
                digits[i - 1] += temp;
            }
        }
    }
    return digits;
};

// revised
const plusOne = digits => {
    let temp = 0;
    digits[digits.length - 1]++;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 10) {
            return digits;
        }
        temp = (digits[i] / 10);
        digits[i] = digits[i] % 10;
        if (i === 0) {
            digits.unshift(temp);
        } else {
            digits[i - 1] += temp;
        }
    }
    return digits;
};