/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let chars = new Array(26).fill(0);

  for (let i = 0; i < word.length; i++) {
    let index = word.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
    chars[index] = chars[index] + 1;
  }

  chars.sort((a, b) => b - a);

  let ans = 0;
  let count = 1;
  for (let i = 0; i < 26; i++) {
    ans += chars[i] * count;
    if ((i + 1) % 8 == 0) count++;
  }

  return ans;
};

console.log(minimumPushes("hiknogatpyjzcdbe"));
