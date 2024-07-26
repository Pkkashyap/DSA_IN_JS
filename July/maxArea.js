/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let left = 0;
   let right = height.length-1;
    let m = 0;
   while(left<right){
    m = Math.max(m,(right-left)*Math.min(height[left],height[right]));
    if(height[left]>height[right]){
            right--;
    }else{
        left++;
    }
   }
   return m;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))