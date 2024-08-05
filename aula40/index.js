const numeros = [1,2,3,4,5,6,7,8,9];

for (let i = 0 ; i< numeros.length; i++){
    let n = numeros[i]
    
    if (n ===2){
        console.log('pulei')
        continue;
    }
    
    if (  n ===5){     // ele vai pular o numero 2 e 5
        console.log(`parei no',${n}`)
       // continue; ele vai voltar e continuar 
           break  //ele vai parar a onde ele encontrar e sai do bloco
    }

    console.log(n)

}