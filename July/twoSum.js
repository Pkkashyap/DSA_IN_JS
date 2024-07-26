var twoSum = function (numbers, target) {
  let frq = {};
  let ans = [];
  for (let i = 0; i < numbers.length; i++) {
    if (frq[target - numbers[i]]) {
      ans.push(frq[target - numbers[i]]);
      ans.push(i + 1);
    } else {
      frq[numbers[i]] = i + 1;
    }
  }

  return ans;
};

console.log(twoSum([2, 3, 4], 6));
