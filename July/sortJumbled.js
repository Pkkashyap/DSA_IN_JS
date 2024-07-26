/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  let ans = {};
  for (let i = 0; i < nums.length; i++) {
    let s = nums[i] + "";
    let key = "";
    for (let n of s) {
      key = key + mapping[n];
    }

    let newkey = parseInt(key);
    if (ans[newkey]) {
      ans[newkey].push(nums[i]);
    } else {
      ans[newkey] = [nums[i]];
    }
  }

  let keys = Object.keys(ans);
  keys.sort((a, b) => a - b);
  let anss = [];
  for (let i = 0; i < keys.length; i++) {
    let val = ans[keys[i]];
    anss.push(...val);
  }

  return anss;
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
