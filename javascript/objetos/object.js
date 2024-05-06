/*
***** OBJECT *****

==> Objetct.create(obj, defineProperties)
    -> RETORNA UM NOVO OBJETO QUE TERÁ UM PROTÓTIPO DO OBJETO DO PRIMEIRO ARGUMENTO.

==> Object.asssign(alvo, obj1, obj2)
    -> ADICIONA AO OBJETO ALVO, MÉTODOS E PROPRIEDADES DOS obj1 e obj2. MODIFICA O OBJETO ALVO.

==> Object.defineProperties (objAlvo, propriedades);
    Object.defineProperties (objeto, {
        rodas: {
            value: 2,
            configurable: false, // impede deletar e mudança de valor
            enumarable: true, // torna enumerável
        }
    })

==> get e set
*/

const pessoa = new Object ({
    nome: 'Marcos',
    idade: 29
});

const carro = {
    marca: 'Marca',
    rodas: 4,
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
};

const honda = Object.create(carro);

honda.marca = 'Honda';
console.log(honda);


//*********Object.asssign(alvo, obj1, obj2)***********

const funcaoAutomovel = {
    acelerar() {
      return 'acelerou';
    },
    buzinar() {
      return 'buzinou';
    },
}
  
const moto = {
    rodas: 2,
    capacete: true,
}
  
const carro2 = {
    rodas: 4,
    mala: true,
}
  
Object.assign(moto, funcaoAutomovel); //adicona a funcaoAutomovel ao objeto moto. MUDA O OBJETO MOTO.
Object.assign(carro, funcaoAutomovel);

//******* Object.defineProperties (objAlvo, propriedades); *******

Object.defineProperties(moto, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudança de valor
        writable: true, //consigo mudar os valores
    }
})

console.log(moto);