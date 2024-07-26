/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let consumed = numBottles;
    
    let ans = 0;
    let remaning = 0;
    while(consumed>=numExchange){
        let rem = Math.floor(consumed/numExchange);
        ans+=rem;
        consumed = (consumed%numExchange)+rem;
    }

    return numBottles+ans;
};


console.log(numWaterBottles(9,3))