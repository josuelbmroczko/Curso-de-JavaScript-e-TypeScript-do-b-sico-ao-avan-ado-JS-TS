// return 
// Retorna um valor 
// termina a funçao 

function soma(a,b){
    return a+b
}



console.log(soma(5,2))


///console.log apenas mostra na tela  



function criaPessoa( nome,sobreNome){
    return {nome ,sobreNome}
}


let l1= (criaPessoa('josuel','b mroczko'))


console.log(typeof l1)



////////////

function falaFrase(comeco){
    function falaResto(resto){
        return comeco+ ''+ resto
    }
    return falaResto
}


const olaMundo = falaFrase('ola');
 
console.log(olaMundo(' mundo'))


////////////////////////

//duplica


function duplica(n){
    return n *2
}