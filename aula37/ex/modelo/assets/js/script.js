

const paragrafos = document.querySelector('.paragrafos'); // Seleciona o primeiro elemento com a classe "paragrafos"

const ps = paragrafos.querySelectorAll("p"); // Seleciona todos os elementos <p> dentro do elemento "paragrafos"

const estilosBody = getComputedStyle(document.body); // Obtém os estilos computados do elemento <body>
const backgroundColorBody = estilosBody.backgroundColor; // Obtém a cor de fundo do <body>
const colorBody = estilosBody.color; // Obtém a cor do texto do <body>

for (let p of ps) {

    {/*
for: Inicia um loop.
let p: Declara uma variável p que será usada dentro do loop.
of: Indica que o loop será iterado sobre os elementos de um objeto iterável.
ps: O objeto iterável, neste caso, uma NodeList contendo todos os elementos <p> selecionados anteriormente.
*/}
  p.style.backgroundColor = backgroundColorBody; // Define a cor de fundo de cada <p> para a cor de fundo do <body>
  p.style.color = '#FFFFFF'; // Define a cor do texto de cada <p> para branco
}
