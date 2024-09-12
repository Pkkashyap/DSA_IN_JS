/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let combinations = [];
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const backTrack = (index, innerCombination) => {
    if (index >= digits.length) {
      combinations = innerCombination;
      return innerCombination;
    }
    combinations = innerCombination;
    let temComb = [];
    for (let i = 0; i < letters[digits[index]].length; i++) {
      for (let j = 0; j < combinations.length; j++) {
        let data = (combinations[j] ?? "") + letters[digits[index]][i];
        temComb.push(data);
      }
    }
    backTrack(++index, temComb);
  };

  backTrack(0, [""]);
  return combinations;
};

console.log(letterCombinations("4233"));
