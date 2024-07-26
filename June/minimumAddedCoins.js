/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort((a,b)=>a-b);
    let found = 1;
    let ans = 0;
    let i=0;
    let range = 0;
    while(range<target){
        if(coins[i]==found){
            range+=coins[i];
            i++;
        }else if(found<coins[i] || i>=coins.length){
            ans++;
            range+=found;
        }else{
            range+=coins[i];
            i++;
        }
        found = range+1;
    }
    return ans;
};


console.log(minimumAddedCoins([6,4,1,9,9,2,10,7],48))