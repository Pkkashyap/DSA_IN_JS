var  getMaximumGold = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let ans  =0;
   
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]!=0)
                ans = Math.max(findMax(grid,i,j,m,n,0),ans);
        }
    }
    return ans;
};

var findMax = function(grid,i,j,m,n,sum){

    if(i>m-1 || j>n-1 || j<0 || i<0 || grid[i][j]==0)
        return 0;

    sum+=grid[i][j];
    let h = grid[i][j];
    grid[i][j] = 0;
    let a = findMax(grid,i+1,j,m,n,sum);
    let b = findMax(grid,i,j+1,m,n,sum);
    let c = findMax(grid,i,j-1,m,n,sum);
    let d = findMax(grid,i-1,j,m,n,sum);
    grid[i][j] = h;
    return Math.max(sum,Math.max(a,Math.max(b,Math.max(c,d))));
}

let t =[[0 ,1 ,6 ,20,0],
        [0 ,0 ,3 ,0 ,0],
        [16,9 ,16,8 ,0],
        [14,0 ,4 ,20,9]]

console.log(getMaximumGold(t));