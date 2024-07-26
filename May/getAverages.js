/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let prefix = [];
    let ans = [];
    ans.push(-1);
    prefix.push(nums[0]);
    for(let i=1;i<nums.length;i++){
        prefix.push(nums[i]+prefix[i-1]);
        ans.push(-1);
    }
    for(let i=k;i<nums.length-k;i++){
        let sum = i-k-1<0?prefix[i+k]:prefix[i+k]-prefix[i-k-1]
        ans[i] = Math.floor(sum/((k*2)+1));
    }
    return ans;
};

console.log(getAverages([7,4,3,9,1,8,5,2,6],3));