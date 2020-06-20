const maxProfit = prices => {
    let valley = prices[0];
    let peak = prices[0];
    let profit = 0;
    let i = 0;
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
        valley = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
        peak = prices[i];
        profit += peak - valley;
    }
    return profit;
};