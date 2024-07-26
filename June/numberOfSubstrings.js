/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let frq =  new Map();
    let ans = s.length;
    for(let i=0;i<s.length;i++){
        if(frq.get(s.charAt(i))){
                ans+=frq.get(s.charAt(i))
                frq.set(s.charAt(i),frq.get(s.charAt(i))+1);
        }else{
            frq.set(s.charAt(i),1);
        }
    }

    return ans;
};


console.log(numberOfSubstrings("abacad"))

