/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;

  for (let num of nums) {
    if (num > nums[res]) {
      res++;
    }
  }

  return res;
};
