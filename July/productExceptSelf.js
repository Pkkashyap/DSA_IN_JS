function productExceptSelf(nums) {
  let left = [];
  let right = [];
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    prod = prod * nums[i];
    left.push(prod);
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prod = prod * nums[i];
    right.unshift(prod);
  }
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      ans.push(right[i + 1]);
    } else if (i == nums.length - 1) {
      ans.push(left[i - 1]);
    } else {
      ans.push(left[i - 1] * right[i + 1]);
    }
  }

  return ans;
}

console.log(productExceptSelf([0, 8, 0]));
