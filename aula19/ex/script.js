//IIFE
const nome ='Luiz';
const pessoas = [];

function meuEscopo() {
    const form = document.querySelector('.form'); // seleciona o formulario
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) { // será chamado quando o evento de "submit" (envio) do formulário for disparado.
        evento.preventDefault();

        const nomeCampo = form.querySelector('.nome'); // procura nome dentro do form sem precisar usar o document.getElementById
        const sobrenomeCampo = form.querySelector('.sobrenome');
        const pesoCampo = form.querySelector('.peso');
        const alturaCampo = form.querySelector('.altura');

        const nomeValor = nomeCampo.value;
        const sobrenomeValor = sobrenomeCampo.value;
        const pesoValor = pesoCampo.value;
        const alturaValor = alturaCampo.value;

        console.log(nomeValor, sobrenomeValor, pesoValor, alturaValor);

        pessoas.push({
            nome: nomeValor,
            sobrenome: sobrenomeValor,
            peso: pesoValor,
            altura: alturaValor
        });

        console.log(pessoas);

        resultado.innerHTML += `${nomeValor} ${sobrenomeValor} ${pesoValor} ${alturaValor}`;
    }

    form.addEventListener('submit', recebeEventoForm); // adiciona um ouvinte de eventos ao const forms
}

meuEscopo();
