
/*

const tresHoras = 60*60*5*1000; //assim eu adidiciona mais 5 horas
const umdia= 60*60*24*1000   // assim eu adiciono mais 1 dia
const data1  = new Date(0+tresHoras+umdia);//Cria uma nova instância do objeto Date

//console.log(data.toString());//toString() em um objeto Date, ele converte a data e a hora contidas no objeto em uma string de texto.

const data = new Date(2015,6,13,4,14,20);

console.log('Dia',data.getDate())
console.log('Mes',data.getMonth())
console.log('Ano',data.getFullYear())
console.log('Horas',data.getHours())
console.log('minutos',data.getMinutes())
console.log('segundos',data.getSeconds())
console.log('Mlsegundos',data.getMilliseconds())
console.log('Dia da semana',data.getDay()) // 0 é domingo e 6 é sabado
console.log(data.toString())

*/
function zeroAEsquerda(num){
return  num >= 10 ? num : `0${num}`    // caso o numero for menor que 10 ele vai adicionar um zero antes do numero
}

function formataData(data){
   const dia = zeroAEsquerda(data.getDate())
   const mes = zeroAEsquerda(data.getMonth() +1)
   const ano = zeroAEsquerda(data.getFullYear())

   return `${dia}/${mes}/${ano}`

}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil)