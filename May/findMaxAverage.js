/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0,ans=0;

    for(let right=0;right<k;right++)
        sum+=nums[right];

    ans = sum/k;
    for(let right=k;right<nums.length;right++){
        sum+=nums[right]-nums[right-k];
        ans= Math.max(ans,sum/k);
    }
    return ans;
};


console.log(findMaxAverage([1,12,-5,-6,50,3],4))