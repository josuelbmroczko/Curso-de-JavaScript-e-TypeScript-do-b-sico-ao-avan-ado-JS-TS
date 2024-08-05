 // switch /Case

 function getDiaSemanaTexto(diaDaSemana){
    let diaSemanaTexto;

        switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
            case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Terça';
                return diaSemanaTexto;

            case 3:
                diaSemanaTexto = 'Quarta';
                return diaSemanaTexto;

            case 4:
                diaSemanaTexto = 'Quinta';
                return diaSemanaTexto;

            case 5:
                diaSemanaTexto = 'Sexta';
                return diaSemanaTexto;

            case 6:
                diaSemanaTexto = 'Sabado';
                return diaSemanaTexto;

            default:
                diaSemana = 'erro alguma coisa na data';
    
    }
    return diaSemanaTexto;
 }

 const data = new Date( ); //'1885-07-13 04:00'
 let diaSemana = data.getDay()
 let diaSemanaTexto = getDiaSemanaTexto(diaSemana);


 console.log(diaSemana,diaSemanaTexto )
{/*switch(diaSemana){
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
            diaSemanaTexto = 'Sabado';
        break;
        default:
            diaSemana = 'erro alguma coisa na data';

}

console.log(diaSemana,diaSemanaTexto )
*/}
// 

//  if(diaSemana ===1  ){
//     diaSemanaTexto='Segunda'
//  }else if( diaSemana ===2 ){
//     diaSemanaTexto='terça'
//  }
//  else if( diaSemana ===3){
//     diaSemanaTexto='quarta'
//  }
//  else if( diaSemana === 4){
//     diaSemanaTexto='quinta'
//  }
//  else if( diaSemana === 5){
//     diaSemanaTexto='Sexta'
//  }
//  else if( diaSemana === 6){
//     diaSemanaTexto='Sabado'
//  }
//  else if( diaSemana === 0){
//     diaSemanaTexto='domingo'
//  }else{
//     console.log('algo errado na data')
//  }


//  console.log(diaSemana,diaSemanaTexto )



