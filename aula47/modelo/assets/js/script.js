 

const relogio = document.querySelector('.relogio') 
const iniciar = document.querySelector('.iniciar') 
const pausar = document.querySelector('.pausar') 
const zerar = document.querySelector('.zerar') 
let segundos =0;
let timer; 


function Relogio (){


 function criaHoraDosSegundos(segundos ){

    const data= new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hours12:false,
        timeZone:'GMT'
    });
 }

 console.log(criaHoraDosSegundos(10))

 

 document.addEventListener('click', function(e){
    const el = e.target;
    

    if (el.classList.contains('zerar')){
        console.log('vc clicou em zerar')
         clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos=0
    }


    if (el.classList.contains('iniciar')){
        console.log('vc clicou em ziniciar')
        relogio.classList.remove('pausado')

         timer = setInterval( function(){
        segundos++;
        relogio.innerHTML= criaHoraDosSegundos(segundos)
    },1000)
    }

    if (el.classList.contains('pausar')){
        console.log('vc clicou em pausr')
         relogio.classList.add('pausado')

    clearInterval(timer)
    }

 })

 }

 Relogio()