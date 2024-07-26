/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function(arrays) {
    let arr =  new Array(101).fill(0);
    let count = arrays.length;
    for(let i=0;i<arrays.length;i++){
        for(let j=0;j<arrays[i].length;j++){
            arr[arrays[i][j]]++;
        }
    }

    let ans = [];
    for(let i=0;i<101;i++){
        if(arr[i]==count)
            ans.push(i);
    }

    return ans;
};


console.log(longestCommonSubsequence([[2,3,6,8],
    [1,2,3,5,6,7,10],
    [2,3,4,6,9]]));


