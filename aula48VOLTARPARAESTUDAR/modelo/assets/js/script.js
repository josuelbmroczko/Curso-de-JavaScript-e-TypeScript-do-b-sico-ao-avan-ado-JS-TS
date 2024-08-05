// Seleciona o input onde o usuário insere a tarefa
const inputTarefa = document.querySelector(".inputTarefa");
// Seleciona o botão que o usuário clica para adicionar uma tarefa
const btnTarefa = document.querySelector(".btn-tarefa");
// Seleciona a lista onde as tarefas serão adicionadas
const tarefas = document.querySelector(".tarefas");

// Função que cria um elemento <li> (item de lista)
function criaLi(){
    const li = document.createElement('li'); // Cria um elemento <li>
    return li; // Retorna o elemento <li> criado
}

// Adiciona um evento de tecla pressionada no input de tarefa
inputTarefa.addEventListener('keypress', function(e){
    // Verifica se a tecla pressionada foi a tecla Enter (código 13)
    if(e.keyCode === 13){
        // Se o input estiver vazio, não faz nada
        if(!inputTarefa.value) return;
        // Chama a função para criar uma nova tarefa com o valor do input
        criarTarefa(inputTarefa.value);
    }
});

// Função que limpa o input e coloca o foco nele novamente
function limpaInput(){
    inputTarefa.value = ''; // Limpa o valor do input
    inputTarefa.focus(); // Coloca o foco no input
}

// Função que cria o botão "apagar" e o adiciona ao item da lista
function criaBotaoAPAGAR(li){
    li.innerHTML += ''; // Adiciona conteúdo vazio ao <li> (sem efeito visível)
    const botaoApagar = document.createElement('button'); // Cria um botão
    botaoApagar.innerHTML = 'apagar'; // Define o texto do botão como "apagar"
    botaoApagar.setAttribute('class', 'apagar'); // Define a classe do botão como "apagar"
    botaoApagar.setAttribute('title', 'apagar essa tarefa'); // Define o título do botão
    li.appendChild(botaoApagar); // Adiciona o botão ao <li>
}

// Função que cria uma nova tarefa
function criarTarefa(textoInput){
    const li = criaLi(); // Cria um novo <li>
    li.innerText = textoInput; // Define o texto do <li> como o texto do input
    tarefas.appendChild(li); // Adiciona o <li> à lista de tarefas
    limpaInput(); // Limpa o input e coloca o foco nele
    criaBotaoAPAGAR(li); // Adiciona o botão "apagar" ao <li>
    salvarTarefa(); // Salva a tarefa no localStorage
}

// Adiciona um evento de clique ao botão de adicionar tarefa
btnTarefa.addEventListener('click', function(e){
    // Se o input estiver vazio, não faz nada
    if(!inputTarefa.value) return;
    // Chama a função para criar uma nova tarefa com o valor do input
    criarTarefa(inputTarefa.value);
});

// Adiciona um evento de clique em todo o documento
document.addEventListener('click', function(e){
    const el = e.target; // Identifica o elemento que foi clicado
    // Verifica se o elemento clicado tem a classe "apagar"
    if(el.classList.contains("apagar")){
        el.parentElement.remove(); // Remove o elemento pai do botão (o <li>)
        salvarTarefa(); // Salva a lista de tarefas atualizada no localStorage
    }
});

// Função que salva a lista de tarefas no localStorage
function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todos os <li> na lista de tarefas
    const listaDeTarefas = []; // Cria um array para armazenar as tarefas

    // Itera sobre cada <li> e extrai o texto, removendo o "apagar"
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim(); // Remove o texto "apagar" e espaços extras
        listaDeTarefas.push(tarefaTexto); // Adiciona o texto da tarefa ao array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array de tarefas para JSON
    localStorage.setItem('tarefas', tarefasJSON); // Salva o JSON no localStorage
}

// Função que adiciona as tarefas salvas no localStorage ao carregar a página
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); // Recupera as tarefas do localStorage
    const listaDeTarefas = JSON.parse(tarefas); // Converte o JSON para um array
    // Itera sobre o array de tarefas e recria cada tarefa
    for(let tarefas of listaDeTarefas){
        criarTarefa(tarefas);
    }
}

// Chama a função para adicionar as tarefas salvas ao carregar a página
adicionaTarefasSalvas();
