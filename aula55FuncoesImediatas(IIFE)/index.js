// IIFE --> Immediately invoked function expression

function qualquerCoisa(){
    console.log(123456);
}
qualquerCoisa();
/////////////


//invocada altomaticamente 

(function(idade,peso,altura){
    console.log('ola mundo');
    const nome = 'josuel';
    const sobreNome=' asuiasuahus'
    function criaNome(nome){
        return nome +''+sobreNome;
    }

    function falaNome(){
        console.log(criaNome("rafaes"))
    }
    falaNome()
    console.log(idade,peso,altura)
})(26,120,170);


const nome = 'josuel'; // nao vai ter comflitos com as variaveis 

/////////////////////////

(function(){

})();
