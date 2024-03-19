const animais = document.getElementById('animais'); //se o ID NÃO EXISTIR, RETORNA NULL
console.log(animais);

//const ul = document.getElementsByTagName('ul'); //seleciona pela TAG

const gridSection = document.getElementsByClassName('grid-section'); //seleciona pela CLASSE
console.log(gridSection[1]);

//querySelector - retorna o PRIMEIRO elemento que combinar com o seletor CSS
//declara da mesma forma que no CSS. .classe / #id / tag

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]'); //retorna apenas o primeiro 
console.log(linksInternos);

//const animais = document.querySelector('.animais');
//const contato = document.querySelector('#contato');
//const ultimoItem = document.querySelector('.animais-lista li:last-child');
//const linkCSS = document.querySelector('[href^="https://"]');
//const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
//const navItem = primeiroUl.querySelector('li');


//querySelectorAll - retorna TODOS os elementos selecionados

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg)

 //=================================================================================================================

 //**********EXERCÍCIOS**********

 // Retorne no console todas as imagens do site

const allImages = document.getElementsByTagName('img');
console.log(allImages);

//document.querySelectorAll('img'); CORREÇÃO DO PROFESSOR

// Retorne no console apenas as imagens que começaram com a palavra imagem

const nameImagem = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(nameImagem);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const tagH2 = document.querySelector('.animais-descricao h2');
console.log(tagH2);

// Selecione o último p do site

const ultimoP = document.querySelector('footer p');
console.log(ultimoP);

//correção do professor
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);


 //=================================================================================================================

 //**********FOR EACH**********
 //seleciona uma lista de itens no DOM.
 //forEach é um MÉTODO de Array
 //caso o objeto não possua o método, transforme ele em um ARRAY

 const imgs = document.querySelectorAll('img');

 imgs.forEach(function(item, index, array) {
    console.log(item, index, array);
 });

  //forEach é um MÉTODO de Array
 //caso o objeto não possua o método, transforme ele em um ARRAY

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


//************ARROW FUNCTION**************
//encurta a function expression
//remove a palavra function e coloca => na frente dos argumentos

//ANTES

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item) {
//    console.log(item);
// });

//DEPOIS COM ARROW FUNCTION

const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item) => {
  console.log(item);
});


//**********EXERCÍCIOS**********

// Mostre no console cada parágrado do site

//const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(function(item) {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafos.forEach(function(item) {
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
//const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i);

//===========================================================================================================================================


