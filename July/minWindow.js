const minWindow = (s, t) => {
  let t_freq = {};

  for (let ele of t) {
    t_freq[ele] = (t_freq[ele] || 0) + 1;
  }

  let t_n = Object.keys(t_freq).length;
  let s_freq = {};
  let s_n = 0;
  let left = 0;
  let ansleft = 0;
  let ansright = Number.MAX_SAFE_INTEGER;
  for (let right = 0; right < s.length; right++) {
    let ele = s.charAt(right);
    s_freq[ele] = (s_freq[ele] || 0) + 1;
    if (s_freq[ele] == t_freq[ele]) {
      s_n = s_n + 1;
    }

    while (left <= right && s_n == t_n) {
      let innerChar = s.charAt(left);
      if (ansright - ansleft > right - left) {
        ansright = right;
        ansleft = left;
      }
      if (s_freq[innerChar]) {
        s_freq[innerChar] = s_freq[innerChar] - 1;
        if (s_freq[innerChar] < t_freq[innerChar]) {
          s_n = s_n - 1;
        }
      }
      left++;
    }
  }

  if (ansright == Number.MAX_SAFE_INTEGER) return "";
  return s.substring(ansleft, ansright + 1);
};

console.log(minWindow("a", "aa"));
