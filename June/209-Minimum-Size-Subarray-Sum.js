/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let left=0;
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        
        while(sum>target){
            ans = Math.min(ans,right-left+1);
            sum-=nums[left];
            left++;
        }
        
        if(sum>=target)
            ans = Math.min(ans,right-left+1);
    }

    return ans==Number.MAX_SAFE_INTEGER?0:ans;
};


console.log(minSubArrayLen(7,[2,3,1,2,4,3]))