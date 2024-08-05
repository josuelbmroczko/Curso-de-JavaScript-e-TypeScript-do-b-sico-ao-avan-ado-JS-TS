

/*);

 document.body.innerHTML =  `Seu numeoro é ${numero} <br/>`;
 document.body.innerHTML += `a raiz quadrada é <br/>`; 
 document.body.innerHTML += `seu numero é nan ? ${numero.valueOf22}<br/> `;
 document.body.innerHTML +=` arrrendonda par abaixo ${Math.floor(numero)}<br/>`;
 document.body.innerHTML +=` arrendonad apara cima  ${Math.ceil(numero)}<br/> `;
 document.body.innerHTML +=`  com duas casas decimais ${n1.toFixed(2)} <br/>`;
                       
 
let numero = Number (prompt("digite um numero"));
 
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto'); 
const inteiroOuNao = document.getElementById('inteiroOuNao');
const nanOuFalse = document.getElementById('nanOuFalse');
const arrendondaParaBaixo = document.getElementById('arrendondaParaBaixo');
const arrendondaParaCima = document.getElementById('arrendondaParaCima');
const comduasCasasDecimais = document.getElementById('comduasCasasDecimais');

numeroTitulo.innerHTML = numero;  // oque a pessoa digitar vai salvar e aparecer na tela 
texto.innerHTML = `<p>Seu numero mais 2 é ${numero +2}</p>`
inteiroOuNao.innerHTML = `o seu numero é inteiro ${Number.isInteger(numero)}`
nanOuFalse.innerHTML =    `Verifica se o numero Nan $  ` 

arrendondaParaBaixo.innerHTML =` arredonda para baixo ${Math.floor(numero)}`
arrendondaParaCima.innerHTML = ` arredonda par cima ${Math.ceil(numero)}`
comduasCasasDecimais.innerHTML=` com das casas decmais ${numero.toFixed(2)}`*/



let numero = Number (prompt("digite um numero"));
 
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto'); 



numeroTitulo.innerHTML = numero;  // oque a pessoa digitar vai salvar e aparecer na tela 

texto.innerHTML ='';
texto.innerHTML += `<p>A raiz quadrada do seu numero é ${numero ** 0.5}</p> `
texto.innerHTML += `<p> ${numero} é inteiro:${Number.isInteger(numero)}</p> `
texto.innerHTML += `<p> é Nan:${Number.isNaN(numero)}</p> `
texto.innerHTML += `<p> arredomndando para baixo:${Math.floor(numero)}</p> `
texto.innerHTML += `<p> arredomndando para baixo:${Math.ceil(numero)}</p> `
texto.innerHTML += `<p> arredomndando para baixo:${numero.toFixed(2)}</p> `


