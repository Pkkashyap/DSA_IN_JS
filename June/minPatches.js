/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let found = 1;
    let ans = 0;
    let i=0;
    let range = 0;
    while(range<n){
        if(nums[i]==found){
            range+=nums[i];
            i++;
        }else if(found<nums[i] || i>=nums.length){
            ans++;
            range+=found;
        }else{
            range+=nums[i];
            i++;
        }
        found = range+1;
    }
    return ans;
};

console.log(minPatches([1,2,2],5))