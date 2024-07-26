/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {

    if(n>k)
        return n==k ? 0 : k;
    let iteration = Math.floor(k/(n-1));
    let origin = (n-1)*iteration;
    let remaningK = k-origin;
    let left = iteration%2==0;

    if(left)
        return remaningK;
    else
        return (n-1)-remaningK;
};

 
 console.log(numberOfChild(2,3));

//  [0 1]
//  [0 1]
//  [0 1]
//  [0 1]
//  [0 1]
//  [0 1]

