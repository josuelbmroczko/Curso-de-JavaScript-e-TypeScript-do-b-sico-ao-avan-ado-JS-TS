//ONJETOS
/*
const array = [1,2,3,4,5];
array.push(4)
array[0] = 'Luiz' //      ISSO PODE 
// array ='outra coisa'   ISSO NAO PODE   MAS SE fOR let PODERIA
console.log(array)


const pessoa1 = {
    nome:'Luiz',
    sobreNome:'miranda',
    idade:25
};

console.log(pessoa1)

*/

//EU VOU FAZER COM UMA FUNÇAO TUDO ISSO 

  /* function criarPessoa(nome,sobreNome,idade){
    return{
        nome:nome,
        sobreNome:sobreNome,
        idade:idade
    }
}

const pesso1 = criarPessoa('Luiz','otavio',22)

console.log(pesso1) 
*/

const pessoa1 = {
    nome:'Luiz',
    sobreNome:'miranda',
    idade:22,

    fala(){
        console.log(`a idade atual é ${this.idade}`) //this nesse contexto significa pessoa1 
    },
    incrementaIdade(){
        this.idade++ 
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
 