function prime(n)
{
    if(n<=1) return false;
    for(let i = 2; i*i<=n;i++)
    {
        if(n%i===0) return false;
    }
    return true
}

let L=parseInt(prompt("Enter L"))
let R=parseInt(prompt("Enter R"))
let K=parseInt(prompt("Enter K"))
let count=0;
for(let i = L; i<R; i++)
{
    if(i%K!==0){
        continue;
    }
    let x = i.toString();
    if(x.includes('0')){
        continue;
    }
    let sum=0;
    for(let j = 0; j<x.length; j++){
        sum+=parseInt(x[j])
    }
    if(prime(sum)){
        count++;
    }
}
alert(count);