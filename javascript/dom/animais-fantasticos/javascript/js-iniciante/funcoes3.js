// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
    return !!dado;
}

console.log(isTruthy(false));

// Crie uma função matemática que retorne o perímetro de um quadrado / lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}

console.log(perimetroQuadrado(25));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return nome + sobrenome;
}

console.log(nomeCompleto('Marcos Vinicius', ' Braga de Souza'));

// Crie uma função que verifica se um número é par

function numPar(numero) {
    if(numero %2 === 0) {
        return `O número ${numero} é PAR!`;
    } else {
        return `O número ${numero} é ÍMPAR!`;
    }
}

console.log(numPar(-96));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

//corrija o erro abaixo.