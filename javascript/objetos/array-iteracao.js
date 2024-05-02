// const carros = ['Ford', 'Fiat', 'Honda'];

// // carros.forEach(function(item) {
// //     console.log(item);
// // })

// //ARROW FUNCTION
// carros.forEach((item) => {
//     console.log(item.toUpperCase());
// })

// const li = document.querySelectorAll('li');

// li.forEach(item => item.classList.add('ativa')); //COMO TEM UM ARGUMENTO, NÃO PRECISA DE PARENTESES / E COMO TEM UMA LINHA PARA RETORNA A FUNÇÃO, NÃO PRECISA DE CHAVES
// li.forEach((item) => {item.classList.add('ativa')});

// li.forEach(function(item){
//     item.classList.add('ativa'); //MESMA COISA DA DE CIMA
// })


// const carros2 = ['Ford', 'Fiat', 'Honda'];
//         const newCarros = carros2.map((item) => {
//             return 'Carro ' + item;
//         });

//         console.log(carros2);
//         console.log(newCarros);


// const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const numerosX3 = numeros.map(item => item * 3);
// console.log(numeros);
// console.log(numerosX3);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//     console.log(acumulador, item, index);
//     return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 55, 852, 5, 44, 6, 520, 47];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     if(anterior > atual)
//         return anterior;
//     else
//         return atual;
// }, 0);

// console.log(maiorNumero);

const frutas = ['Banana', 'Pêra', 'Uva'];
    const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
}); // true

console.log(temUva);

function maiorQue100(numero) {
return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true
console.log(temMaior);