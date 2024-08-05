

const nome = prompt('Digite seu nome completo');

/*
document.body.innerHTML = `o seu nome é ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML +=`A segunda letra do seu nome é:${nome.charAt(1)}<br/>`
document.body.innerHTML +=`Qual o primeiro índice da letra 'a' no seu nome? ${nome.charAt(0)}<br/>`
//document.body.innerHTML +=`Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf}<br/>`
document.body.innerHTML +=`As últimas 3 letras do seu nome são: ${nome.slice(-4)}<br/>`
document.body.innerHTML += `As palavras do seu nome são: <br/>`

document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}<br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br/><br/><br/>`

console.log(nome);


////////////RESPOSTA
document.body.innerHTML = `o seu nome é ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML +=`A segunda letra do seu nome é:${nome.charAt(1)}<br/>` // OU  ${nome[1]}

document.body.innerHTML +=`Qual o primeiro índice da letra 'a' no seu nome? ${nome.indexOf('a')}<br/>`
document.body.innerHTML +=`Qual o último índice da letra 'a' no seu nome? ${nome.lastIndexOf('a')}<br/>`

document.body.innerHTML +=`As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br/>`
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')} <br/>`

document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}<br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br/><br/><br/><br/>`

console.log(nome);
*/



document.body.innerHTML = `o seu nome é ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML +=`A segunda letra do seu nome é:${nome[1]}<br/>`
document.body.innerHTML +=`Qual o primeiro índice da letra 'a' no seu nome? ${nome.indexOf('a')}<br/>`
 document.body.innerHTML+=`Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('a')}<br/>`
document.body.innerHTML +=`As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br/>`
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')} <br/>`

document.body.innerHTML += `Seu nome com letras maiúsculas ${nome}<br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome}<br/><br/><br/>`

console.log(nome);