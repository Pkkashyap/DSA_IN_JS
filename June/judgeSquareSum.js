/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {    
    for(let i=0;(i*i)<=c;i++){
        let b =  Math.round(Math.sqrt(c-(i*i)));
        console.log(b);
        if((b*b)+(i*i)==c){
            return true;
        }
    }
    return false;
};


console.log(judgeSquareSum(0))



