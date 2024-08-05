/*
Primitivos (IMUTAVEIS)- string, number, bolenan, indefined, null (bigint, symbol)   IMUTAVEIS
let nome = 'Luiz'
nome[0] = 'R'   ///IMULTAVEL EU NAO POSSO trocar o L pelo R
console.log(nome[0])

Referencia (MULTAVEL) = ARRAYS , object, FUINCTION

*/

const a = {
    nome:'Luiz',
    sobreNome:'otavio'
};
const b = {...a}
a.nome='joao'
 
console.log(a)
console.log(b)