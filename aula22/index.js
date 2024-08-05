/*
OPERADORES Logicos

&&  -> AND -> E
||  -> OR -> OU
!  -> NOT -> NAO
*/



const expressaoAND = true &&true &&true &&true  //TODAS PRECISA SER VERDADEIRA PARA RETORNAR TRUE
const expressaoOR = true || false       // se so uma for verdadeira retornara verdadeira
console.log( expressaoOR)

const usuario = 'joao'
const senha = 12345
const entrar = usuario == 'joao' && senha ==12345;
console.log(entrar);

console.log(!false)  //isso vai inverter    !SIGNIFICA NEGAÇAO ELE INVERTE