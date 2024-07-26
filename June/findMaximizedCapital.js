/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let freqOfCapital = new Map();
    let profitFreq = new Map();
    let ans = 0;
    let innerCapital = w;
    ans+=innerCapital;
    for(let i=0;i<capital.length;i++){
        let val = freqOfCapital.get(capital[i]);
        let prVal =  profitFreq.get(capital[i]);
        if(val!=null){
            freqOfCapital.set(capital[i],val+1);
            prVal.push(profits[i]);
            profitFreq.set(capital[i],prVal);
        }else{
            freqOfCapital.set(capital[i],1);
            let v = [];
            v.push(profits[i]);
            profitFreq.set(capital[i],v);
        }   
    }

    for(let key of profitFreq.keys()){
        let val =  profitFreq.get(key);
        val.sort((a,b)=>b-a);
        profitFreq.set(key,val);
    }


    while(k!=0){
        
        let temCapital =innerCapital;

        while(freqOfCapital.get(temCapital)==null && temCapital>0){
            temCapital--;
        }
        innerCapital=temCapital;
        let frqCapVal =  freqOfCapital.get(innerCapital);
        if(frqCapVal!=null && frqCapVal!=0){
            let profitValue =  profitFreq.get(innerCapital);
            frqCapVal--;
            freqOfCapital.set(innerCapital,frqCapVal);
            let tempProfit = profitValue.shift();
            profitFreq.set(innerCapital,profitValue);
            innerCapital=tempProfit;
            ans+=innerCapital;
            innerCapital=ans;
        }
        innerCapital=ans;
        k--;
    }
        return ans;
};

console.log(findMaximizedCapital(11,11,[1,2,3],[11,11,11]))