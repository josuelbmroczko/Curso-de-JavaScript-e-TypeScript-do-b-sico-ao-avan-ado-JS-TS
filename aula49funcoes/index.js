// Declaraçao de funçao (function hoisting)


 falaoI();

function falaoI(){
    console.log('oie');
}


//Firsy-class objetos (Objetos de primeira class)
//funtion expression
// eu posso usar essa funçao como um parametro em otra funçao 
const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado();




function execultaFuncao(funcao){
    console.log('vou execultar uma funcao dentro de outra fuçao ')

    funcao();

}

execultaFuncao(souUmDado)

/////////////


//// arrow function
const arrowfuncition = () => {
console.log("sou uma arrow function")
}

arrowfuncition()


//////////////////////////

// dentro de um Objetos

const obj = {
    falar:function(){
        console.log("estoufalando")
    }
}


obj.falar()