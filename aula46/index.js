

function MostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

 
const timer = setInterval(function(){
    console.log(MostraHora());

},1000);

setTimeout( function (){
    clearInterval(timer) /// isso vai fazer o codigo parar sozinho 
},3000) 

setTimeout(function(){
console.log("ola mundo ") /// isso vai ser execultado em 5 segundos
},5000)