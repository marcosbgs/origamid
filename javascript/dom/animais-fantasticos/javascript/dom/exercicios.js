const botao = document.querySelector('a');
const texto = document.querySelector('p')

function alterarTexto(event) {
    texto.classList.add('ativo');
    if(event.key === 'ç') {
        texto.classList.remove('ativo');
    }
}

botao.addEventListener('click', alterarTexto);
window.addEventListener('keydown', alterarTexto);

