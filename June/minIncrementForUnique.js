/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let max = 0 ;let ans = 0;
    for(let i=0;i<nums.length;i++){
        max = Math.max(nums[i],max);
    } 

    let arr = new Array(max+nums.length+1).fill(0);

    for(let i=0;i<nums.length;i++){
        arr[nums[i]]++;
    } 

    let carry = 0;
    for(let i=0;i<arr.length;i++){
        arr[i]+=carry;
        carry=0;
        if(arr[i]==0 || arr[i]==1)
            continue;
        
        carry = arr[i]-1;
        ans+=carry;
    } 

    return carry<=0?ans:ans+carry;
};



console.log(minIncrementForUnique([0,2,2,2,2,2]))