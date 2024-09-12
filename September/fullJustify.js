/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let ans = [];
  let tmparr = [];
  let n = 0;
  for (let i = 0; i < words.length; i++) {
    tmparr.push(words[i]);
    n = n + words[i].length;
    if (tmparr.length - 1 + n > maxWidth) {
      tmparr.pop();
      i--;
      ans.push(tmparr.join(" "));
      n = 0;
      tmparr = [];
    }
  }

  ans.push(tmparr.join(" "));
  console.log(ans);
};

fullJustify(
  [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
  ],
  20
);
