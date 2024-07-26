/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let ans = [];
    let calc = [];
    let calcc = [];

    for(let i=0;i<26;i++){
        ans.push(0);
        calc.push(0);
        calcc.push(0);
    }

    words.map((word,index)=>{
        calc = [...calcc];
       for(let c=0;c<word.length;c++){
        calc[word.charCodeAt(c)-97]++;
       }
        if(index==0)
        {
            ans = [...calc]
        };

        for(let i=0;i<26;i++)
        {
            if(ans[i]!=0){
                ans[i] = ans[i]>=calc[i]?calc[i]:ans[i];
            }

        }
    })

    let a = [];
    for(let i=0;i<ans.length;i++){
        if(ans[i]!=0){
            for(let j=0;j<ans[i];j++){
                a.push(String.fromCharCode(i+97));
            }
        }
    }
   return a;
    
};

console.log(commonChars( ["cool","lock","cook"]));