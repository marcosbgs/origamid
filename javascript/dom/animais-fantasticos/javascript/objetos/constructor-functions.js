/*
function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Carro(); //objeto que vem do contrutor Carro
honda.marca = 'oi';

const fiat = new Carro();
fiat.marca = 'Fiat Uno';

function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda Civic', 4000);
const fiat = new Carro('Fiat Uno', 5000);

console.log(fiat.marca, fiat.preco);
console.log(honda);

function Carro2(marca, precoInicial) {
    taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const jeep = new Carro2('Renegade', 5000);
console.log(jeep);
*/

/*
function Dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe);
    }
}

const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');
lastLi.ativar('classeAdicionada');
*/


// Transforme o objeto abaixo em uma Constructor Function

function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(nome + ' andou');
    }
}

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(nome + ' andou');
//    }
//  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  const joao = new Pessoa('João', 20);
  const maria = new Pessoa('Maria', 25);
  const bruno = new Pessoa('Bruno', 15);

  console.log(joao.andar());
  console.log(Pessoa.prototype);
  console.log(bruno);
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  