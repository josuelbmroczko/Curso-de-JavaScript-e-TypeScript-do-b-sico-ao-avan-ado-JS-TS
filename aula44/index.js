
try{
    console.log('certo')
}catch(err){
    console.error('Nao existe' );
}


function soma (x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x ou y precisam ser numeros')
    }
    

    return x + y;
}
try{
    console.log(soma(3,5))
    console.log(soma(3,8))
    
}catch(err){
    console.log(err)
}

