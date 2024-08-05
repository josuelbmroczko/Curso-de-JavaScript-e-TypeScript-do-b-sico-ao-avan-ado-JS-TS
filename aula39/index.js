 function random (min,max){
    const r =   Math.random() * (max - min )+min;
    return Math.floor(r);
 }

 const min =1 ;
 const max = 50;

 let rand = random(min,max);
 
 while (rand !==10){         //// WHILE :qianto minha condiçao for isso faça isso se nao saia 
    rand= random(min,max);
    console.log(rand)        
 }

 console.log('**********************')
 console.log('**********************')
 console.log('**********************')
 do {
    rand= random(min,max);   ////DO WHILE faça e depois check ... Primeiro ele checa o codigo depois ele execulta
    console.log(rand)    
 }while(rand !==10)