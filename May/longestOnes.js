var longestOnes = function(nums, k) {
    let left=0,count=0,right=0;
    for(right=0;right<nums.length;right++){
        if(nums[right]==0)count++;

        while(count>k){
            if(nums[left]==0){
                count--;
            }
            left++;
        }
    }
    return right-left+1;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))