/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxq = [];
    let ans = [];
    maxq.push(nums[0]);
    for(let i=0;i<k;i++){
            if(maxq[-1]<nums[i]){
                while(maxq[-1]<nums[i]){
                    maxq.pop();
                }
                maxq.push(nums[i])
            }
    }

    for(let i=k;i<nums.length;i++){
            if(maxq[-1]<nums[i]){
                while(maxq[-1]<nums[i]){
                    maxq.pop();
                }
                maxq.push(nums[i])
            }

            
    }
};