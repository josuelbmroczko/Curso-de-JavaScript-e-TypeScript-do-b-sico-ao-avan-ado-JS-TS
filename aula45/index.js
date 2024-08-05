


try{
        console.log('abrir um arquivo')
        console.log('deu erro ao abrir ')
        console.log('fechei o arquivo')
} catch(e){
    console.log('tratando erro ')
}finally{
 console.log("sempre é execultado")
}



function retornaHora(data){
    if(!(data instanceof Date)){
        throw new TypeError('Esperando data');

    }
// Remover essa linha, pois o parâmetro 'data' já está sendo passado
    // if (data) {
    //     data = new Date();
    // }

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

try{
const hora = retornaHora(new Date('01-01-1970 12:54:45'));
console.log(hora)

 }catch(err){
    //tratar erro 
 }finally{
    console.log('tenha um bom dia ')
 }