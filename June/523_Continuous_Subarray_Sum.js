

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
        let mods = new Set();
        mods.add(0)
        let sum = 0,prevSum=0;
        for(let i=0;i<nums.length;i++){
            prevSum = sum;
            sum = (sum+nums[i])%k;
            if(mods.has(sum))
                return true;
            mods.add(prevSum);
        }

        return false;
};


console.log(checkSubarraySum([23,2,4,6,6],7))
