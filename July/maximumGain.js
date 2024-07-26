/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    return Math.max(baFunction(s,x,y,true),abFunction(s,x,y,true));
};

/**
 * 
 * @param {string} s 
 */
var baFunction = (s,x,y,isre)=>{
    
    let ans = 0;
    let stack = [];
    let remaningS = "";
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        if(c !='a' && c !='b'){
            let ss = stack.join("");
            remaningS+=ss;
            remaningS+=c;
           
            stack =[];
            
            continue;
        }

        if(c =='b'){
            stack.push('b');
        }else{
            if(stack.length!=0){
                stack.pop();
                ans++;
            }else{
                remaningS+=c;
            }
        }
    }
    let ss = stack.join("");
    remaningS+=ss;
    ans=ans*y;
    if(!isre){
        return ans;
    }else{
        ans+=abFunction(remaningS,x,y,false);
        return ans;
    }
}




var abFunction = (s,x,y,isre)=>{

    let ans = 0;
    let stack = [];
    let remaningS = "";
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        if(c !='a' && c !='b'){
            let ss = stack.join("");
            remaningS+=ss;
            remaningS+=c;
           
            stack =[];
            
            continue;
        }

        if(c =='a'){
            stack.push('a');
        }else{
            if(stack.length!=0){
                stack.pop();
                ans++;
            }else{
                remaningS+=c;
            }
        }
    }
    let ss = stack.join("");
    remaningS+=ss;
    ans=ans*x;
    if(!isre){
        return ans;
    }else{
        ans+=baFunction(remaningS,x,y,false);
        return ans;
    }
}



console.log(maximumGain("babaeuasvabab", 2,  1))