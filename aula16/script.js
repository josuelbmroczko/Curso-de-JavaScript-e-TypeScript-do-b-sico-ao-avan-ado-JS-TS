//            0123
const nome = 'Luiz'
console.log(nome[0])
console.log(nome[1])


///                0      1      2
const alunos = ['Luiz','Maria','João'];
console.log(alunos[0])//vai retorna o numero que eu colocar do array 
console.log(alunos[2])

alunos[0]='Eduardo'///VAI TROCAR Luiz por Eduardo
console.log(alunos)

alunos[3]='Luiza'///Vai adicionar mais um nome na lista o numero 3 nao existe no array entao vai adicionar
console.log(alunos)
alunos.push('Rafaela')//vai adicionar mais 1 sem especificar qual é o ultimo
alunos[alunos.length] = 'Luana';////vai adicionar mais 1 sem especificar qual é o ultimo
console.log(alunos)

alunos.unshift('Carla')//isso vaia adicionar a Carla em primeiro lugar no indice 0

const removidoFinal = alunos.pop();//isso vai remover o ultimo indice e salvar numa variavel quem foi removido
const removidocomeco = alunos.shift()// isso vai remover do começo e salvar qual foi removido



console.log(`removido do final ${removidoFinal}`)
console.log(`removido do começo ${removidocomeco}`)
console.log(alunos)
console.log(`quantidade de aluno ${alunos.length}`)

console.log(typeof alunos)


