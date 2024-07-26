/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, k) {
    let ans = 0
    let sum = 0;
    let frq = new Map();
    frq.set(0,1);
    for (let right = 0; right < nums.length; right++) {
        sum+= nums[right];
        if(frq.get(sum-k)){
           let t = frq.get(sum-k);
           ans+=t;
        }
        let val =  frq.get(sum)==null?0:frq.get(sum);
        frq.set(sum,val+1)
    }

    return ans;
};

console.log(numSubarraysWithSum([1,0,1,0,1],2))