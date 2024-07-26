let pobj = new Promise((res,rej)=>{
   setTimeout(()=>{
    res("Pankaj");
   },5000);
})

async  function x(){
    let cal  = await pobj;
    console.log(cal);
}

x();