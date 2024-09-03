var getLucky = function (s, k) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const numbers = s
    .split("")
    .map((item) => abc.indexOf(item) + 1)
    .join("");
  let res = numbers;

  console.log(numbers);
  for (let i = 1; i <= k; i++) {
    res = res
      .split("")
      .reduce((acc, item) => acc + Number(item), 0)
      .toString();
  }

  return res;
};

console.log(getLucky("dbvmfhnttvr", 5));
