 
 const form = document.querySelector('#formulario') //Estou selecionando o formulario

 form.addEventListener('submit',function(evento){
 evento.preventDefault();


 
 let inputPeso = evento.target.querySelector('#peso');
 let inputAltura =evento.target.querySelector('#altura')
 
 let peso = Number(inputPeso.value);
 let altura = Number(inputAltura.value)
 
if(!peso){
    console.log('peso inavlido',false)
}
if(!altura){
    console.log('altura errada',false)
}
altura = altura / 100;//isso vai converter a altura em centimetros para metros

const imc = getImc(peso,altura);
  

console.log(peso,altura,imc)
 })


 ///////////////////////////////////////////////////////
 //////CALCULA O IMC
function getImc(peso,altura){
const imc = peso /(altura*altura);
return imc.toFixed(2)
}



 ////////////////////////////////////////////////////////
 ////getNivelIMC
  