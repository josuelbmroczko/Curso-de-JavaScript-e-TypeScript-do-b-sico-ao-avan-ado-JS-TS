const nome = ['luiz', 'josuel','laru'];
const nome1 = "josuel"


const pessoa = {
    nome:'luiz',
    sobrenome:'miranda'
}


for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}


for (let i in nome ){
    console.log(nome[i])

}


for (let valor of nome){
    console.log(valor)
 console.log("****************")
}

 
nome.forEach(function(valor,indice,array){
           //  nomes,e 0,1,2,3,4
    console.log(valor,indice,array)
} )