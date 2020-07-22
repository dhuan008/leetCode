/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let minPrice = prices[0],
        maxProfit = 0;
    for (price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};