/*

=> HEIGHT E WIDTH
-propriedades dos objetos ELEMENT e HTMLELEMENT. São READ-ONLY
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

---------------------------------------------------------------------------------
=> OFFSETTOP E OFFSETLEFT

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;
---------------------------------------------------------------------------------
=> GETBOUNDINGCLIENTRECT()
getBoundingClientRect()

Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

---------------------------------------------------------------------------------
=> WINDOW

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


*/

const listaAnimais = document.querySelector('.animais-lista');
const animaisTop = listaAnimais.offsetTop;
const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

//console.log(animaisTop);
//console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
);

