/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;

    logs.map((log)=>{
        if(log.includes('../')){
            count = Math.max(0,count-1);
        }else if(log.includes('./')){
            count=count;
        }else{
            count++;
        }
    })

    return count;
};

console.log(minOperations( ["d1/","../","../","../"]))