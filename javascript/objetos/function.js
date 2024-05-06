// const perimetro = new Function('lado', 'return lado * 4');
// console.log(perimetro(5));

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(5, 6));
// console.log(somar.length);
// console.log(somar.name);



// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano + velocidade)
// }

// descricaoCarro();

// console.log(descricaoCarro.call({marca: 'Honda', ano: 2015}, 150));

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

frutas.forEach.call(carros, (item) => { //MUDEI O THIS. AO INVÉS DE APARECER O QUE ESTÁ EM FRUTAS, APARECE O QUE ESTÁ EM CARRO.
  console.log(item);
})

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}



const ul = new Dom('ul');

console.log(ul)