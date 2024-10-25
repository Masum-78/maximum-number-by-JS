let arr= [1,5,9,0];

let output= arr.reduce((prev,curr)=>{

     return prev>curr? prev:curr;     
});
     console.log(output);