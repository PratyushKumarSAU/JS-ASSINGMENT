let base = parseInt(prompt("enter base: "));
let distance = parseInt(prompt("enter distance: "));
let minutes_late = parseInt(prompt("enter minutesLate: "));
let seed = parseInt(prompt("enter seed: "));

let fare = base + (7 * distance);
if (minutes_late > 15)
{
    fare+=20;
}
if (distance>10)
{
    fare = fare + (fare * 0.10); 
}
if (seed % 2!==0)
{
    fare-=seed; 
}
else
{
    fare+=seed;
}
fare = Math.ceil(fare / 5) * 5;
alert(fare);