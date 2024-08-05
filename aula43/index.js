

function NumeroRecebido( a){
    if (a % 3 == 0){
        return('fiizzbuss')
    }else if( a % 5 == 0){
        return('buzz')
    }else if( a% 3 && 5 ==0){

        return('fizz 3')
    }else if(a ==='number'){
        return 'numero'
    }
     return  'nao é um nuero',a
}
for (let i =0; i <= 100; i ++){
    console.log(i,NumeroRecebido(i))
}

 