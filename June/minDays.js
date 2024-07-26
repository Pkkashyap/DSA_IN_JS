/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number} 
 */

var getNumOfBouquets = function(bloomDay,mid,k){
    let ans = 0;
    let count = 0;

    for(let i=0;i<bloomDay.length;i++){
        if(bloomDay[i]<=mid){
            count++;
        }else{
            count=0;
        }

        if(count==k){
            ans++;
            count=0;
        }
    }

    return ans;
}

var minDays = function(bloomDay, m, k) {

    if(bloomDay.length>m*k) return -1;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for(let num of bloomDay){
        min = Math.min(min,num);
        max = Math.max(max,num);
    }

    while(min<=max){
        let mid = Math.round((min+max)/2);
        if(getNumOfBouquets(bloomDay,mid,k)>=m){
            max = mid-1;
        }else{
            min = min+1;
        }
    }
    return min;
}

console.log(minDays([1,10,3,10,2],3,1))