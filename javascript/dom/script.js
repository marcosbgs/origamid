//DOM - DOCUMENT OBJECT MODEL
//manipula estrutura, estilo e conteúdo

const h1Selecionado = document.querySelector('h1'); //selecionar Tag
//const href = window.location.href;
//console.log(href);

const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function() {
    alert('Clicou em ', h1Selecionado);
})

const url = window.location.href;
console.log(url);

const elementoAtivo = document.querySelector('.ativo');

const linguagem = window.navigator.language;

console.log(linguagem);

const largura = window.innerWidth;
console.log(largura);