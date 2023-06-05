export default function Modal() {


    // Pegar o botão que existe com a classe delete
    const cancelButtons = document.querySelector('.modal-wrapper .buttons .button.grey.cancel');
    cancelButtons.addEventListener('click', close)


    function open() {
        // Funcionalidade de atribuir a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add('active');
    }

    function close() {
        // Funcionalidade de remover a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove('active');
    }

    return {
        open, close
    }
}

