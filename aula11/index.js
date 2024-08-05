/*
*Aritmétricos 

* + adiçao / cocatenaçao
* - / * 
*  ** POTENCIAÇAO 
*  % RESTO
*/

// PRECEDENCIA ( () ,**,*,/,%,+,-   )

const num1 ='5';
const num2 = 10;
console.log(num1+num2); //510   Concatençao

const num11 =5;
const num22 = 10;
const nun33 = 2;
console.log(num11 + num22);  //15      Adiçao
console.log(num11 ** num22);
console.log(num11 % num22); 
console.log((num11+num22) * nun33)    // usar ()  PARA alterar  aprecedencia da conta dentro do sparenteses é execultado primeiro


let contador = 1;
contador++;
contador--;

console.log(contador);


// eu tambem posso usar assim
let passo =2 //vai pular de 2 em 2 
contador = 1;

contador=contador+passo;
console.log(contador); 

contador=contador+passo;
console.log(contador); 

contador=contador+passo;
console.log(contador);

//OU 
 passo =2 ;
contador = 1;

contador +=passo; // contador = contador+passo
console.log(contador);
contador +=passo; 
console.log(contador);
contador +=passo; 
console.log(contador);

