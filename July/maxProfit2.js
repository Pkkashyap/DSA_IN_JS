function maxProfit(prices) {
  let ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      ans = ans + (prices[i + 1] - prices[i]);
    }
  }

  return ans;
}

console.log(maxProfit([1, 2, 3, 4, 5]));
