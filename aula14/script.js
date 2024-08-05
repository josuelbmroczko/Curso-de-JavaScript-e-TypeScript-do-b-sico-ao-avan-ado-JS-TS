// IEEE 754-2008

//let n1 = 150.372372254724;
//let n2 = 2.5;


//let tempo = n1 +' 5';

//console.log(Number(tempo));


let n1 = 0.7;
let n2 = 0.1;

n1 += n2;  //8   float
n1 += n2;  //9   float
n1 += n2;  //1  INTEIRO
 
n1 = parseFloat(n1.toFixed(2));// ISSO FAZ ELE VIRAR UM NUMEOR INTEIRO 1 E NAO 0.99999999   usar parseFloat ou NUMBER
console.log(n1.toFixed(2))
console.log(Number.isInteger(n1));//VERIFICA SE É UM NUMERO INTEIRO
 