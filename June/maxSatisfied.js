/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
    let starIndex = -1;
    let endIndex = -1;
    let ans =0;

    for(let i=0;i<minutes;i++){
        ans+=grumpy[i]==0?0:customers[i];
    }
    starIndex = 0;
    endIndex = minutes-1;
    let left = 0;
    let temp =ans;
    for(let i=minutes;i<customers.length;i++){
        temp+=grumpy[i]==0?0:customers[i];
        temp-=grumpy[left]==0?0:customers[left];
        if(temp>ans){
            starIndex=left+1;
            endIndex=i;
            ans=temp;
        }
        left++;
    }

    ans = 0;
    for(let i=0;i<customers.length;i++){
        if(i>=starIndex && i<=endIndex)
            ans+=customers[i];
        else
            ans+=(customers[i]*(!grumpy[i]))
    }

    return ans;

};

console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3))