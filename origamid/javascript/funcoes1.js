function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado); //não estou executando a função, apenas retornando ela
console.log(areaQuadrado(25)); //estou executando a função

//PARÂMETROS - são os valores que a função pode receber
//ARGUMENTOS - valor que vai dentro do parâmetro

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu.';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato.';
    } else {
        return 'Eu não gosto de cores.';
    }
}

console.log(corFavorita('azul'));

addEventListener('click', function(){console.log('OI')}); //USANDO FUNÇÃO COMO PARÂMETRO