// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');  // Seleciona o formulário

form.addEventListener('submit', function(e) {     // Pausa o submit
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso'); // Seleciona o input do peso
    const inputAltura = e.target.querySelector('#altura'); // Seleciona o input da altura

    const peso = Number(inputPeso.value); // Pega o valor digitado no input do peso
    let altura = Number(inputAltura.value); // Pega o valor digitado no input da altura

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    } 

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // Convertendo altura de centímetros para metros
    altura = altura / 100;

    const imc = getImc(peso, altura); // Calcula o IMC
    const nivelIMC = getNivelIMC(imc); // Calcula o nível do IMC
    
    console.log(imc, nivelIMC); // Exibe o IMC no console

    setResultado(`Seu IMC é ${imc} (${nivelIMC})`, true); // Exibe o resultado no HTML
});

function getNivelIMC(imc) {
    const nivel = [
        'Abaixo do peso', // < 18.5
        'Peso normal', // 18.5 - 24.9
        'Sobrepeso', // 25 - 29.9
        'Obesidade grau 1', // 30 - 34.9
        'Obesidade grau 2', // 35 - 39.9
        'Obesidade grau 3' // >= 40
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
 const p = criarP();
    
 if(isValid ){
    p.classList.add('paragrafo-resultado')
 } else{
    p.classList.add('bad')
 }

   
    p.innerHTML = msg;
    resultado.appendChild(p);
}
