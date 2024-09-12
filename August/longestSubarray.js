const findLength = (arr, k) => {
  let left = 0;
  let ans = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > k) {
      sum -= arr[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

console.log(findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8));
