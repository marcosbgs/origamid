/*
=> NUMBER
    --> Number.isNaN() e Number.isInteger()
        - NaN vai aparecer TRUE só para o que é NaN
            console.log(Number.isNaN(5 * 'A'));

    --> Number.parseFloat() e Number.parseInt()
        - converte string para FLOAT ou INT

    --> Number.toFixed()
        - dita a quantidade de casas decimais

    --> Number.toString()
        - Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

    --> Number.toLocaleString(língua, options)
        - const preco = 59.49;
        preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
        preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

        let valor = 54851.14;
        valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'});
        console.log(valor);

=> MATH
    --> Math.PI==> RETORNA PI
    --> Math.E ==> NÚMERO DE EULER
    --> Math.LN10 ==> LOGARITMO DE 10
    --> Math.abs ==> TRANSFORMA O NÚMERO NEGATICO EM POSITIVO
    --> Math.ceil ==> ARREDONDA PARA CIMA
    --> Math.floor ==> ARREDONDA PARA BAIXO
    --> Math.round ==> 
    --> Math.max() ==> RETORNA O MAIOR NUMERO
    --> Math.min() ==> RETORNA O MENOR NUMERO
    --> Math.random() ==> NÚMERO ALEATÓRIO DE 0 A 1
        --> Math.random() * 100 ==> NÚMERO DE 0 A 100
        --> Math.floor(Math.random() * 1000); ==> NÚMERO DE 0 A 1000 INTEIROS

*/

// Retorne um número aleatório
// entre 1050 e 2000

let num = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(num);


// Retorne o maior número da lista abaixo
const numeros = Number.parseInt('4, 5, 20, 8, 9');

console.log(Math.max(numeros));


// // Crie uma função para limpar os preços
// // e retornar os números com centavos arredondados
// // depois retorne a soma total
// const listaPrecos = ['R$ 59,99', ' R$ 100,222',
//                      'R$ 230  ', 'r$  200'];
