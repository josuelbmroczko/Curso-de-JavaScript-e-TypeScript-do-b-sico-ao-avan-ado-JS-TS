const elemento = [
    {tag:'p' ,texto:'frase 1'}, //0
    {tag:'div' ,texto:'frase 2'}, //1
    {tag:'footer' ,texto:'frase 3'},//2
    {tag:'section' ,texto:'frase 4'},//3
];



const container = document.querySelector('.container');

const div = document.createElement('div')


for (let i =0; i < elemento.length;i++){
   let { tag,texto} = elemento[i];
   let tagCriada = document.createElement(tag)
   tagCriada.innerHTML = texto;
   div.appendChild(tagCriada)
 
}


container.appendChild(div)