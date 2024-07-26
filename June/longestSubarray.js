/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxQ = [];
    let minQ = [];
    let left = 0;
    let ans = 0;

    for(let right=0;right<nums.length;right++){
        
        while(maxQ.length!=0 && maxQ.slice(-1) < nums[right]){
            maxQ.pop();
        }
        maxQ.push(nums[right]);

        while(minQ.length!=0 && minQ.slice(-1) > nums[right]){
            minQ.pop();
        }
        minQ.push(nums[right]);

        while(Math.abs(maxQ[0]-minQ[0])>limit){

            if(maxQ[0]==nums[left])
                maxQ.shift()
            if(minQ[0]==nums[left])
                minQ.shift()
            left++;
        }

        ans = Math.max(ans,right-left+1);
    }   

    return ans;
};


console.log(longestSubarray([10,1,2,4,7,2],5))

