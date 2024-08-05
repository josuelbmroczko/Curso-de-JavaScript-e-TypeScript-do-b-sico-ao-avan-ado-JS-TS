

function retornaFuncao(){
    const nome ='Josuel';

    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('josuel');



console.dir(funcao)
console.dir(funcao2)