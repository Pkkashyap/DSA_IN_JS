/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
         let arr = [];

         for(let i=0;i<difficulty.length;i++){
            let tmp = [difficulty[i],profit[i]];
            arr.push(tmp);
         }

         arr.sort((a,b)=>{
            return b[1]-a[1];
         })


         let sum = 0;

         for(let i=0;i<profit.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[j][0]<= worker[i]){
                    sum+=arr[j][1];
                    break;
                }
            }
         }
         return sum;
        
};



console.log(maxProfitAssignment( [85,47,57],[24,66,99],[40,25,25]))