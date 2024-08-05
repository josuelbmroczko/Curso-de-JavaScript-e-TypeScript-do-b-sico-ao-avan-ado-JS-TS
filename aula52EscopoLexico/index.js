
///escopo lexico a funçao reconhece tudo que foi declarado dentro dela e dos vizinho na bolha 
const nome = 'Josuel';

function falaNome(){
    console.log(nome)
}

falaNome();

function usaFalaNiome(){
    falaNome()

}
usaFalaNiome()