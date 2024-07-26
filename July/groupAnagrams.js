function groupAnagrams(strs) {
  let ans = {};
  for (let innerString of strs) {
    let frq = new Array(26).fill(0);
    for (let str of innerString) {
      frq[str.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let key = frq.join("#");
    if (!ans[key]) {
      ans[key] = [innerString];
    } else {
      ans[key].push(innerString);
    }
  }

  return Object.values(ans);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
