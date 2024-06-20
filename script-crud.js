// encontrar botão adicionar tarefa 

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const ulTarefas = document.querySelectorAll('.app__section-task-list');

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__sector-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
    `;

    const paragrafo = document.createElement('p');
    paragrafo.textContext = tarefa.descricao;

    const botao = document.createElement('button'); // cria um elemento button
    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', '/imagens/edit.png'); // seta um atribut para o element da img
    botao.append(imagemBotao);

    li.append(svg); // coloca o elemento svg dentro do li
    li.append(paragrafo); 
    li.append(botao);

    return li;

}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
})
//  nesta função pegamos o evento para ter controle sobre o formulário 
formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Faz com que quando eu aperto em salvar, o formulário não seja enviado naturalmente.
    // const descricaoTarefa = textArea.value; aqui ele pega o que o usuário digitou
    const tarefa = { // esse objeto identifica a tarefa que estou cadastrando no momento.
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    // localStorage.setItem('tarefas', tarefas); o local storage só aceita string, por isso temos que transformar a lista em string.
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // com a API json podemos usar o metodo stringify para transformar em string a lista.
})

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
})