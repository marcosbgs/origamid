// //CRIAR UM OBJETO

// let menu = {
//     width: 800,
//     heigth: 50,
//     backgroundColor: '#84E',
// }

// menu.heigth = 100; //REATRIBUÍ O VALOR DE HEIGHT 

// //THIS FAZ SEMPRE REFERÊNCIA AO PRÓPRIO OBJETO

// let height = 120;
// let menu = {
//     width: 800,
//     height: 50,
//     metadeHeight() {
//         return this.height / 2;
//     }
// }

// console.log(menu.metadeHeight()); //25
// //SEM O THIS SERIA 60, POIS ELE PEGARIA O VALOR DE 120.


let pessoa = {
    nome: 'Marcos Vinicius',
    sobrenome: 'Braga de Souza',
    idade: 29,
    cidade: 'Contagem',
    profissao: 'Desenvolvedor de Software',
    possuiFaculdade: true,
    nomeFaculdade: 'Instituto Infnet',
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
}

console.log(pessoa.nomeCompleto());

let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

this.preco = 3000;

console.log(this.preco);

let cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa == 'homem') {
            return 'latir';
        } else {
            return 'nada';
        }
    }
}

console.log(cachorro.latir('mulher'));