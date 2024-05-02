// const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];
// const carros = new Array('Corola', 'Mustang', 'Honda'); //criando um ARRAY COM CONSTRUTOR

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
// function andar (nome) {console.log(nome) }];


// carros[0] = 'Ferrari';
// carros[10] = 'Parati';

/*
Array.from() => MÉTODO UTILIZADO PARA TRANSFORMAR ARRAY-LIKE OBJECT EM UMA ARRAY DE FATO
Array.isArray() => VERIFICA SE O VALOR PASSADO É UMA ARRAY E RETORNA UM BOOLEANO
Array.of(10); => CRIA UM ARRAY COM O VALOR 10; -> [10]
Array.of(1, 2, 10, 20, 30) => [1, 2, 10, 20, 30]
new Array(5) => SE PASSAR APENAS UM VALOR COMO PARÂMETRO, CRIA UM ARRAY VAZIO COM 5 ELEMENTOS -> [,,,,]
Array(5) => MESMA COISA, CRIA UM ARRAY VAZIO COM 5 ELEMENTOS  [,,,,] ****A PALAVRA new NÃO É OBRIGATÓRIA****
Array(1, 2, 3, 4); => COM MAIS DE UM ARGUMENTO, CRIA OS ARRAYS COM OS VALORES PASSADOS -> [1, 2, 3, 4]
*/

// let li = document.querySelectorAll('li'); //node list
// let arrayLi = Array.from(li); //Array

// console.log(li);
// console.log(arrayLi);
// Array.isArray(li);
// Array.isArray(arrayLi);

// const carros = {
//     0: 'Fiat', //passabdi index ao invés do nome
//     1: 'Honda',
//     2: 'Ford',
//     length: 4,
// }
// const carrrosArrays = Array.from(carros);


// console.log(Array.of('Minas Gerais', 'Brasil'));

// console.log(Array.isArray(carros));
// console.log(carros.length);

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// frutas.length; // 3

// console.log(frutas[0].length); // 6
// console.log(frutas[1].length); // 4
// console.log(frutas[2].length); // 2
// console.log(frutas[2][0].length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();
// console.log(instrumentos); // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8,123, 147, 874, 199, 54, 589];
// idades.sort(); //COLOCA EM ORDEM, PORÉM, É POR DIGITO. EX: 112, 1125, 123, 172,
// console.log(idades); // [1, 12, 21, 32, 33, 43, 8]



// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // 5
// console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros.push('Ferrari'); // 6
// console.log(carros); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];



// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros.shift(); // 'Ford'
// console.log(carros.pop()); // ['Fiat', 'VW', 'Honda'];
// console.log(carros);

// const ultimoCarro = carros.pop(); // 'Honda'
// console.log(carros.pop()); // ['Fiat', 'VW'];
// console.log(carros);



// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// console.log(carros.reverse()); // ['Honda', 'VW', 'Fiat', 'Ford'];


// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// carros.splice(1, 0, 'Kia', 'Mustang'); // []
// console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(0, 0, 0));
// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// console.log(transporte1);
// console.log(transporte2);
// console.log(transportes);

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// console.log(linguagens);


// console.log(linguagens.includes('css')); // true
// console.log(linguagens.includes('ruby')); // false
// console.log(linguagens.indexOf('python')); // 4
// console.log(linguagens.indexOf('js')); // 2
// console.log(linguagens.lastIndexOf('js')); // 5

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// console.log(linguagens.join()); // 'html,css,js,php,python'
// console.log(linguagens.join(' ')); // 'html css js php python'
// console.log(linguagens.join('-_-')); // 'html-_-css-_-js-_-php-_-python'

const linguagens = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens.slice(3)); // ['php', 'python']
console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens);

