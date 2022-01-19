//ex 3 part 1


var x = parseInt(prompt("Ingrese valor de vaiable X:"));

//Forma 1 pensada
// console.log(x);
// for (let i = x*2; i > 0; i--){
//     x = x - 0.5;
//     console.log(x)
// }

//Forma mejorada
for (var i = x; i > 0; i-= 0.5){
        console.log(i)
}


//ex3 part 2

for (let x = 0; x <= 100; x++)
{
    var numb = x;
    var odd = numb % 2;
    if (odd != 0) { console.log(numb);}
   
}


//ex3 part 3 
var n = 0;

while (n < 5)
{
    
    n++;
    console.log("["+n+"]");
}


//ex 3 part4

var n = 0;
var x = 0
var select =  parseInt(prompt("Igrese un valor entero"));
while (n < select)
{
    
    n++;
    x += n;
}
console.log("n = " + select +" Sum = " + x);