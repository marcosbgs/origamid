// Retorne o url da página atual utilizando o objeto window

// Seleciona o primeiro elemento da página que
// possua a classe ativo

//const primeiraClasse = document.querySelector('.animais');
//console.log(primeiraClasse);

// Retorne a linguagem do navegador


// Retorne a largura da janela 
//console.log(window.innerWidth);

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('[src^="./img"]')
console.log(imagens2);


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2')
console.log(animaisDescricao)

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p')
console.log(ultimoParagrafo[ultimoParagrafo.length - 1])

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => {
    console.log(item)
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText)
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);


// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
    item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item,index ) => {
    if(index > 0) {
        item.classList.remove('ativo')
    }
    
})

// Verifique se as imagens possuem o atributo alt
const imagensAtributo = document.querySelectorAll('img');
imagensAtributo.forEach((item) => {
    console.log(item.hasAttribute('alt'), item)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]');
linkExterno.setAttribute('href', 'https://www.google.com.br');


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *');
// body.addEventListener('click', (event) => {
//     console.log(event.target);
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
    event.currentTarget.remove();
}

body.forEach((elemento) => {
    elemento.addEventListener('click', removeElement)
})



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

