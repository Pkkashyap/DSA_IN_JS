/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum=(sum+nums[i])%p;
    }
    console.log("sum",sum);

    let frq = 0;
    let dic = new Map();
    let ans = 0;
    dic.set(0,-1);
    for(let i=0;i<nums.length;i++){
        frq=(nums[i]+frq)%p;
        let check = (frq-sum+p)%p;
        if(dic.get(check)!=null){
            ans =  Math.min(ans,i-dic.get(check));
        }else{
            dic.set(check,i);
        }
       
    }
    return ans;
};


console.log(minSubarray([6,3,5,2],9))