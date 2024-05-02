function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou';
}

const marcos = new Pessoa('Marcos', 29);

console.log(Pessoa.prototype);
console.log(marcos.prototype);
console.log(marcos.andar());