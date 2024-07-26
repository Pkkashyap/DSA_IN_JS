/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let ans = 0
    let sum = 0;
    let frq = new Map();
    frq.set(0,1);
    for (let right = 0; right < nums.length; right++) {
        sum+= nums[right]%2==1 ? 1: 0;
        if(frq.get(sum-k)){
           let t = frq.get(sum-k);
           ans+=t;
        }
        let val =  frq.get(sum)==null?0:frq.get(sum);
        frq.set(sum,val+1)
    }

    return ans;
};


console.log(numberOfSubarrays([1,1,2,1,1],3))