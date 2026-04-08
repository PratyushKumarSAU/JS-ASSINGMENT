let N = parseInt(prompt("enter N"));
let seed = parseInt(prompt("enter seed"));

// Perform the transformation 3 times
for(let i = 0; i < 3; i++)
{
    if(N % 2 === 0) {
        N = (N / 2) + seed;
    }
    else
    {
        N = (N * 3) - seed;
    }
}
let isThreeDigits = (N >= 100 && N <= 999);
let a = N.toString();
if (isThreeDigits && a[1] == seed)
{
    alert(`YES, ${N}`);
}
else
{
    alert(`NO, ${N}`);
}