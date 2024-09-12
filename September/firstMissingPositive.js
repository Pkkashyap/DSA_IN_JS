/**
 * @param {number[]} nums
 * @return {number}
 */

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; ) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 0;
    }

    if (nums[i] != 0 && nums[i] != i + 1) {
      if (nums[nums[i] - 1] === nums[i]) nums[i] = 0;
      swap(i, nums[i] - 1, nums);
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) return i + 1;
  }

  return n + 1;
};

console.log(firstMissingPositive([1, 2, 3, 10, 2147483647, 9]));
