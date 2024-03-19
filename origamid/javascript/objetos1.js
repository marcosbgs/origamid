var pessoa = {
    nome: 'Marcos Vinicius',
    idade: 29,
    profissao: 'Desenvolvedor de Software',
    possuiFaculdade: true,
}

console.log(pessoa.profissao);

//quando uma função for uma propriedade, chamamos de MÉTODO

var quadrado = {
    lados: 4,
    area: function(lados) {    //MÉTODO
        return lados * lados;
    },
    perimetro: function(lados) {
        return this.lados * lados; //AO INVÉS DE FICAR ESCREVENDO QUADRADO TODA HORA,USA-SE THIS. THIS É O PRÓPRIO OBJETO. quadrado.lados = this.lados
    },
    perimetro2(lados) {
        return this.lados * lados; //PODEMOS ESCREVER UM MÉTODO SEM A PALAVRA FUNCTION
    }
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.perimetro2(5));


//OBJETO = ORGANIZA MELHOR O CÓDIGO EM PARTES REUTILIZÁVEIS
console.log(Math.PI);
console.log('CONSOLE É UM OBJETO E LOG É UM MÉTODO');
console.table(quadrado);