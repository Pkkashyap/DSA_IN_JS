var topKFrequent = function (nums, k) {
  let n = nums.length;
  let numArr = new Array(n + 1).fill(null);
  let frq = {};

  for (let i = 0; i < n; i++) {
    if (!frq[nums[i]]) {
      frq[nums[i]] = 1;
    } else {
      frq[nums[i]] = frq[nums[i]] + 1;
    }
  }

  let ans = [];
  for (let key in frq) {
    let val = frq[key];
    if (numArr[val] == null) {
      numArr[val] = [key];
    } else {
      numArr[val].push(key);
    }
  }

  for (let i = n; i >= 0; i--) {
    while (numArr[i] != null && numArr[i].length != 0 && k > 0) {
      ans.push(numArr[i].pop());
      k--;
    }
  }

  return ans;
};

console.log(topKFrequent([-1, -1], 1));
