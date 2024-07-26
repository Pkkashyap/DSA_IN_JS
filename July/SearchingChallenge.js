/**
 *
 * @param {string} str
 */
function SearchingChallenge(str) {
  let allBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let allBracketsClosed = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (allBrackets[str.charAt(i)]) {
      stack.push(str.charAt([i]));
    } else if (allBracketsClosed[str.charAt(i)]) {
      let ss = stack.pop();
      if (ss == allBracketsClosed[str.charAt(i)]) {
        count++;
      } else {
        return 0;
      }
    }
  }

  let ans = "1 " + count;
  return ans;
}

// keep this function call here
console.log(SearchingChallenge("(c([od]er)) b(yt[e])"));
