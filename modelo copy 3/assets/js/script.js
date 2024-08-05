 const form = document.querySelector('.formulario')

 form.addEventListener('submit',function(evento){
   evento.preventDefault()

 
   const idade = evento.target.querySelector('.idade')
   const pagamento = evento.target.querySelector('.pagamento')


   const resultado = document.querySelector('#resultado');

   resultado.innerHTML += ` SUA IDADE É :${idade.value}<br>`
   resultado.innerHTML += `seu pagamento é${pagamento.value}`
 })