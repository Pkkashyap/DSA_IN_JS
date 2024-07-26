function maxProfit(prices) {
  let ans = 0;
  let buy = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    }

    ans = Math.max(ans, prices[i] - buy);
  }

  return ans;
}

console.log(maxProfit([1, 2, 3, 4, 5]));
