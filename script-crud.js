// encontrar botão adicionar tarefa 

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tarefas = [];

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