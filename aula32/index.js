{/*
    
let a = 'a'
let b = 'b'
let c = 'c'


let numeros = [b,c,a];W

[a,b,c] = numeros;

console.log(a,b,c)



...rest  , spread operatror dao resto

*/}//////////////////////////////////////////////////////////////

//const numero = [1,2,3,4,5,6,7,8,9]
 

//let [primeiroNumero,segundoNumero, ...resto] = numero;
//let [um,  ,tres, ,cinco, ...resto] = numero;
///console.log(um, tres, cinco)
//console.log(resto)

////////////////////////////////////////
            

//                0         1         2
//               0 1 2    0 1 2     0 1 2
const numero =[ [1,2,3], [4,5,6] , [7,8,9]]


console.log(numero[2][2]);

const [,[,,seis]] = numero
console.log(seis)

const [lista1 , lista2, lista3] = numero
console.log(lista3)
