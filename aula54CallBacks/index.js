 
function tempoAleatorio(min =1000 , max = 3000){
const numero = Math.random()* (max - min)+ min
return Math.floor(numero)
}

console.log(tempoAleatorio())

 function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback)callback();
    },tempoAleatorio());
    
 };

 function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback)callback();
    },tempoAleatorio());
 };

 function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback)callback();
    },tempoAleatorio());
 };
{/*
 f1(function(){
    f2(function(){
        f3(function(){
             console.log('Ola mundo')   /// vai execultar na orden inderente do tempo de cada um 
        });
    });
 });
*/}

 //// eu tambem posso fazer assim 
 

f1(f1callback);

function f1callback(){
    f2(f2callback);
}
function f2callback(){
    f3(f3callback);
}
function f3callback(){
    console.log('ola mundo')
}