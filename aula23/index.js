/*
&& -> todas precisa ser true  para ser true
|| -> todas precisa ser falsa para ser falsa




function falaoi(){
    return 'oi';
}

let vaiEXECULTAR  = true;

console.log(vaiEXECULTAR && falaoi());

*/
const hora = 32;

if( hora >=0 && hora <=11){
    console.log('Bom dia ');
}else if(hora >=12 && hora <=17){
    console.log('Boa tarde')
}else if (hora >=18 && hora <=23){
    console.log('BOA NOITE ')
}else{
    console.log('digite uma hora valida')
}
 