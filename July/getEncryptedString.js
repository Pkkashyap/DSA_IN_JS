/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let ans = "";

    let n = s.length;
    let nn=n;
    let len = nn+k; 
    while(n>0){
       
        ans+=s.charAt(len%nn);
        len++;
        n--;
    }

    return ans;
};


console.log(getEncryptedString("dart",3));

