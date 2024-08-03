/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  let frq = {};
  for (let i of target) {
    frq[i] = (frq[i] || 0) + 1;
  }

  for (let i of arr) {
    if (!frq[i]) {
      return false;
    }
    frq[i] = frq[i] - 1;
    if (frq[i] == 0) delete frq[i];
  }

  return Object.keys(frq).length == 0;
};

console.log(canBeEqual([1, 2, 3, 3, 4], [2, 4, 1, 3]));
