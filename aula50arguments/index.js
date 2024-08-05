// arguments que sustenta todos os argumentos passado depois na funçao

function funcao(){
    let total = 0;
    for (let argumento of arguments ){
        total += argumento
    }''
    console.log(total)
}

funcao( 5,4,5,6,8,7,6)



// arguments que sustenta todos os argumentos passado depois na funçao

function funcao2(a,b,c,d,e,f){
    let total = 0;
    for (let argumento of arguments ){
        total += argumento
    }''
    console.log(a,b,c) 
}

funcao2( 1,2,3)// resultado 1 2 3 undefined undefined undefined



////////////
///SOMA

function funcao3(a,b){
    b =b || 0;
console.log(a+b)
}

funcao3(111,11)

//adicionando um valor padrao

function funcao4(a,b =0,c =10){
 
console.log(a+b+c)
}

funcao4(11,undefined,20)//para pular um tem q usar o undefined
/////////////
function funcao5({nome,sobreNome,idade}){
 
    console.log(nome,sobreNome,idade)
    }
    
    funcao5({nome:'josuel',sobreNome:'b mroczko',idade: 26})



    ////////


    function funcao6([valor1,valor2,vlor3]){
 
        console.log(valor1,valor2,vlor3)
        }
        
        funcao6( ['josuel','b mroczko', 27])



        ///////////



    const conta = function (operador,acumulador,...numeros){  /// .. significa o resto

        for(let numero of numeros){
          if(operador === '+'){
            acumulador +=numero
          }   if(operador === '-'){
            acumulador -=numero
          }   if(operador === '/'){
            acumulador /=numero
          }   if(operador === '*'){
            acumulador *=numero
          }
         
      

        };
        console.log(acumulador)
        };

        conta('*',2,2);
//////////