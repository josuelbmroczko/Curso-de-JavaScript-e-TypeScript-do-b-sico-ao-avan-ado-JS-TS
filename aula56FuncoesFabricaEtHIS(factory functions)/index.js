function criaPessoa(nome,sobrenome,altura ,peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome}${this.sobrenome}`    
        } ,

        set nomeCompleto (valor){
           valor = valor.split(' ');
           this.nome =valor.shift()
           this.sobrenome=valor.join()
           console.log(valor)
        },

        fala: function(assunto='falando sobre nada'){
            return `${this.nome} esta falando sobre ${assunto}`
        },
        altura:altura,
        peso:peso,
        get imc(){  ///Getter assim posso so obter o valor sem usar ()
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('JOSUEL', 'B MROCZKO', 1.70, 115);

const p2 = criaPessoa( 'KAIRA','F A CORADI',1.70,56)

const p3 = criaPessoa( 'CLARICE','C MROCZKO',1.10,53)


  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);