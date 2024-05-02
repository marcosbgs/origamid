const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const carros = new Array('Corola', 'Mustang', 'Honda'); //criando um ARRAY

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
function andar (nome) {console.log(nome) }];


carros[0] = 'Ferrari';
carros[10] = 'Parati';

console.log(Array.of('Minas Gerais', 'Brasil'));

console.log(Array.isArray(carros));
console.log(carros.length);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2
console.log(frutas[2][0].length);

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
console.log(instrumentos); // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8,123, 147, 874, 199, 54, 589];
idades.sort();
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]



const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];



const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'
console.log(carros.pop()); // ['Fiat', 'VW', 'Honda'];
console.log(carros);

const ultimoCarro = carros.pop(); // 'Honda'
console.log(carros.pop()); // ['Fiat', 'VW'];
console.log(carros);



const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros.reverse()); // ['Honda', 'VW', 'Fiat', 'Ford'];


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
