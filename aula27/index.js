

// ? :

 const pontuacaoUsuario= 2929; 
 const nivelUsuarios = pontuacaoUsuario >= 1000 ? 'USUARIO VIP' : 'USUARIO NORMAL';



 const corDeFundo = null; // aqui passa a cor que o usuario escolheu 
 const corPadrao = corDeFundo || 'preta'
 
 console.log(nivelUsuarios,corPadrao)