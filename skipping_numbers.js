let n = parseInt(prompt("enter N: "));
let seed = parseInt(prompt("enter seed: "));

let m = 0;
let sum = 0;

while(sum<n)
{
    m++;
    if(m%(seed+2)!==0)
    {
        sum+=m;
    }
}
alert(m)
alert(sum)