// OPERADORES DE ATRIBUIÇÃO

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


var numero = 20;
var numero2 = 10;
numero *= numero2;
console.log(numero);

//======================================================================================================================================================================
//OPERADOR TERNÁRIO - abreviação de IF e ELSE
//(condição) ? true : false

var idade = 55;
var possuiDiabetes = true;
var podeBeber = (idade >= 18 && possuiDiabetes) ? 'PODE BEBER' : 'NÃO PODE BEBER';
console.log(podeBeber);

//======================================================================================================================================================================

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'DAR CRÉDITO AO CLIENTE' : 'NEGAR CRÉDITO AO CLIENTE';

console.log(darCredito);

