 {/*
    const h1 = document.querySelector(".container");

const data = new Date();

function getDiaSemanaTexto(diaDaSemana) {
    let diaSemanaTexto;

    switch(diaDaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'Erro: alguma coisa errada na data';
    }
    return diaSemanaTexto;
}

function nomeMes(numeroMes) {
    let mesTexto;

    switch(numeroMes) {
        case 0:
            mesTexto = 'janeiro';
            break;
        case 1:
            mesTexto = 'fevereiro';
            break;
        case 2:
            mesTexto = 'março';
            break;
        case 3:
            mesTexto = 'abril';
            break;
        case 4:
            mesTexto = 'maio';
            break;
        case 5:
            mesTexto = 'junho';
            break;
        case 6:
            mesTexto = 'julho';
            break;
        case 7:
            mesTexto = 'agosto';
            break;
        case 8:
            mesTexto = 'setembro';
            break;
        case 9:
            mesTexto = 'outubro';
            break;
        case 10:
            mesTexto = 'novembro';
            break;
        case 11:
            mesTexto = 'dezembro';
            break;
        default:
            mesTexto = 'Erro: alguma coisa errada na data mesTexto';
    }
    return mesTexto;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMesTexto = nomeMes(numeroMes);

    const ano = data.getFullYear()
 const dia = data.getDate()
    

 const horas =String(data.getHours()).padStart(2,'0')
 
 const minutos =String(data.getMinutes()).padStart(2,'0')

    return (`${nomeDia},
        
             ${dia}
             ${nomeMesTexto} de
             ${ano}
             ${horas}: 
             ${minutos}
             
           `);
}

        h1.innerHTML = criaData(data);
*/}


const h1 = document.querySelector(".container");
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});
