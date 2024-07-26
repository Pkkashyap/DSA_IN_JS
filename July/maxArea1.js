function maxArea1(heights) {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(
      Math.min(heights[left], heights[right]) * (right - left),
      max
    );

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(maxArea1([2, 2, 2]));
