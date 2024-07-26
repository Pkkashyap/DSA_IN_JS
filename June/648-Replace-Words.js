/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    frq = {};
    sent = sentence.split(" ");

    dictionary.map((pre)=>{
        let make = true;
       for(let i=0;i<pre.length;i++){
            if(frq[pre.substring(0,i)]){
                make = false;
            }
       }

       if(make){
        frq[pre] = pre.length;
       }
    })
    let ans = "";
    sent.map((word)=>{
        let make = true;
        let i=0;
        do{
            if(frq[word.substring(0,i)]){
                ans+=word.substring(0,i)+" ";
                make=false;
            }
            i++;
       }while(make && i<word.length);

       if(make){
        ans+=word+" ";
       }     
    })

    return ans.trim();
};


console.log(replaceWords(["a","b","c"],"aadsfasf absbs bbab cadsfafs"))