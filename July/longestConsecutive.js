/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let num = new Set(nums);
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!num.has(nums[i] - 1)) {
      let temLength = 1;
      while (num.has(nums[i] + temLength)) {
        temLength++;
      }

      ans = Math.max(temLength, ans);
    }
  }

  return ans;
}

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
