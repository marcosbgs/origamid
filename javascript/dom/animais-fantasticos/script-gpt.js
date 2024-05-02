const footerNovo = document.querySelector('.copy')
// footerNovo.addEventListener('click', function(){
//     footerNovo.innerText = 'Novo Footer';
// })

const novoParagrafo = document.createElement('p');
novoParagrafo.innerHTML = 'Novo elemento "p" adicionado com o "CreateElement"';
footerNovo.appendChild(novoParagrafo);

const novoLink = document.createElement('a');
novoLink.innerHTML = 'Novo link adicionado com CreateElement';
footerNovo.appendChild(novoLink);

novoLink.setAttribute('target', '_blank');
novoLink.setAttribute('href', 'https://www.google.com');

novoLink.classList.add('linkNovo');
function clickLinkNovo(event) {
    event.preventDefault();
}

novoLink.addEventListener('click', clickLinkNovo);

//novoParagrafo.classList.add('novaClasse');

//novoParagrafo.classList.replace('novaClasse', 'novaClasseInativa')

function mudarClasse (event) {
    if(event.key === 'z') {
       novoParagrafo.classList.toggle('novaClasse'); 
    } else if (event.key === 'x') {
        novoParagrafo.classList.toggle('novaClasseInativa');
    }  
}
 
window.addEventListener('keydown', mudarClasse);
//fff
