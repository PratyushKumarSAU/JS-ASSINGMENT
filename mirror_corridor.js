let N = parseInt(prompt("enter N"))
let K = parseInt(prompt("enter K"))
let res=-1
for(let X = 0; X<=100000; X++)
{
    if((N+X)%K===0){
        let y=(N+X).toString()
        let flag=true;
        for(let j = 0; j<y.length/2; j++)
        {
            if(y[j]!==y[y.length-1-j]){
                flag=false;
                break;
            }
        }
        if(flag===true)
        {
            res=X;
            break;
        }
    }
}
alert(res)