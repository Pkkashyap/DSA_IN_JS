/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function (prices) {
  let max1 = 0;
  let max2 = 0;
  let buy = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      if (buy != Number.MAX_SAFE_INTEGER) {
        max2 = max1;
        max1 = Math.max(prices[i - 1] - buy, max1);
      }
      buy = prices[i];
    }
  }

  return max1 + max2;
};

console.log(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4]));
