import Modal from './modal.js';

const modal = new Modal()

let modalTitle = document.querySelector('.modal h2');
let modalParagraph = document.querySelector('.modal p');
let modalButton = document.querySelector('.modal .buttons button');



// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {   
    // Adiciona a escuta
    button.addEventListener('click', handleClick);
})


// Pegar todos os botões que existe com a classe delete
const deleteButtons = document.querySelectorAll('.actions a.delete');

deleteButtons.forEach(button => {   
    // Adiciona a escuta
    button.addEventListener('click', (event) => handleClick(event, false))
})

// Função abre a modal

function handleClick(event, check = true) {
    event.preventDefault();

    // Pegando o id da sala usando dataset no html
    const roomId = document.querySelector('#room-id').dataset.id 

    // Pegando o id da questão usando o event que tras as informações da questão
    const questionId = event.target.dataset.id

    // Pegando o action da questão 
    const slug = check ? 'check' : 'delete'

    // Selecionando dinamicamente o form e setando o valor do atributo action do form
    const form = document.querySelector('.modal-wrapper .modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);


    const text = check ? 'Marcar como lida' : 'Excluir';
    
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalParagraph.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = 'Sim, ' + text.toLowerCase();
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

    // Abrir a modal
    modal.open();
}


