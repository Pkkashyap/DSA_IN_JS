const filp = (arr) => {
  let left = 0;
  let curr = 0;
  let ans = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] == "0") {
      curr++;
    }

    while (curr > 1) {
      if (arr[left] == "0") curr -= 1;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(filp("1101101111"));
