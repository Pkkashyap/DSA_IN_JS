/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  const ans = [];
  let left = 0;
  let right = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[right]) <= Math.abs(nums[left])) {
      ans.push(nums[left] * nums[left]);
      left++;
    } else {
      ans.push(nums[right] * nums[right]);
      right--;
    }
  }
  return ans.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
