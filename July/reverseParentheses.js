/**
 * @param {string} s
 * @return {string}
 */

function reverse(s){
    return s.split("").reverse().join("");
}
var reverseParentheses = function(s) {
    stack = [];
    let tem = "";
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=='(' ){
            if(tem)
                stack.push(tem);
            tem="";
        }else if(s.charAt(i)==')'){
            if(tem=="")
                tem = stack.pop();
            let poped = "";
            if(stack.length!=0)
                poped= stack.pop()
            if(i==s.length-1){
                stack.push(reverse(poped+tem));
            }else{
            let revesed = reverse(tem);
            
            stack.push(poped+revesed);
            }
            tem="";
        }else{
            tem+=s.charAt(i)+"";
        }
    }

    if(stack.length>1){
        let a = reverse(stack.pop());
        return stack.pop()+a+tem;
    }
        
    return stack[0];
};

console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));
// etco
// octe
