function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = 0 - nums[i];
      if (nums[left] + nums[right] > sum) {
        right--;
      } else if (nums[left] + nums[right] < sum) {
        left++;
      } else {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }
      }
    }
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
