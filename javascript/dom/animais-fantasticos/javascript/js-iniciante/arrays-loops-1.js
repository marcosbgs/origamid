// // ARRAY - guarda vários valores em uma única variável

// var videoGames = ['Switch', 'PS4', 'XBOX', 'Nintendo 64'];

// console.log(videoGames[2]);

// videoGames.pop(); // REMOVE O ÚLTIMO ITEM E RETORNA ELE
// console.log(videoGames);
// videoGames.pop();
// console.log(videoGames);

// videoGames.push('3DS'); // ADICIONA NO FINAL DO ARRAY
// console.log(videoGames);

// videoGames.length; //VER O ITENS DO ARRAY
//======================================================================================================================================================================

//FOR LOOP - FAZEM ALGO REPETIDAMENTE ATÉ QUE UMA CONDIÇÃO SEJA ATINGIDA
// inicio, condição, incremento

// for (var numero = 1; numero <= 10; numero++) {
//     console.log(numero);
// }
//======================================================================================================================================================================

//WHILE LOOP
// var i = 0;
// while (i <= 1000) {
//     console.log(i);
//     i = i + 10;
// }
//======================================================================================================================================================================

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// for (var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
// }
//======================================================================================================================================================================

//BREAK - O LOOP PARA QUANDO ENCONTRA A PALAVRA BREAK

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// for (var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     if(videoGames[item] === 'PS4') {
//         break;
//     }
// }

//======================================================================================================================================================================

//forEach - método que executa uma função para cada item do ARRAY

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
// videoGames.forEach(function(item, index, array) {
//     console.log(item, index, array);
// });

//======================================================================================================================================================================

//EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copaBrasil.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}.`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]; //para puxar o ÚLTIMO ITEM
console.log(ultimaFruta);
console.log(frutas);



