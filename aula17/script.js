

/*

function saudacao(nome){
     return `Bom dia ${nome}`
}

const variavel = saudacao('luiz');
console.log(variavel)

*/


/*
function soma(x = 1, y =1){  //caso eu nao defina um valor quando eu chamar a funçao ele sera 1 e 1 
 const resultado = x+y;
 return resultado
}
console.log(soma(1,8));
 
console.log(soma('josuel',' kaira'));
console.log(soma( ));

 */


///CRIANDO UMA FUNÇAO ANONIMA

const raiz = function(n){
    return n **0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//com eronfunction
const raizz = (n) =>{
    return n **0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));