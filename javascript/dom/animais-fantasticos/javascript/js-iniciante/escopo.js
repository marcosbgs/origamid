//ESCOPO DE FUNÇÃO - variáveis declaradas dentro de uma função não são acessadas fora delas
//ESCOPO EVITA CONFLITO ENTRE NOMES

// function mostrarCarro() {
//     var carro = 'Fusca';
//     console.log(carro);
//   }
  
//   mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

//======================================================================================================================================================================
//ESCOPO GLOBAL
//declarar uma variável sem as palavras VAR, LET OU CONST

//ESCOPO DE FUNÇÃO PAI - variáveis declaradas no escopo PAI da função conseguem ser acessadas pelas funções.

//var carro = 'Fusca';

// function mostrarCarro() {
//   var frase = `Meu carro é um ${carro}`;
//   console.log(frase);
// }

// mostrarCarro(); // Meu carro é um Fusca
// console.log(carro);  // Fusca

//======================================================================================================================================================================
//ESCOPO DE BLOCO - VAR não respeita o escopo de bloco, pois vaza o bloco
//CONST E LET respeitam escopo de bloco

// if(true) {
//     var carro = 'Fusca';
//     console.log(carro);
//   }
//   console.log(carro); // Carro

//======================================================================================================================================================================
//{} CRIAM UM BLOCO - se escrever somente {} cria um escopo de bloco

// {
//     var moto = 'Honda';
//     const ano = 2008;
// }

// console.log(moto);
// //console.log(ano);

// for(let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

//======================================================================================================================================================================
/*
CONST 
- MANTÉM ESCOPO DE BLOCO
- IMPEDE REDECLARAÇÃO
- IMPEDE MODIFICAÇÃO DO VALOR DA VARIÁVEL
- AO DECLARAR, TEM QUE ATRIBUIR O VALOR
*/

// const mes = 'Dezembro';
// //mes = 'Janeiro'; // erro, tentou modificar o valor
// //const semana; // erro, declarou sem valor

// const data = {
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2018,
// }

// console.log(data.dia = 29);// Funciona
// //data = 'Janeiro'; // erro

//======================================================================================================================================================================
/*
LET 
- MANTÉM ESCOPO DE BLOCO
- IMPEDE REDECLARAÇÃO
- PERMITE A MODIFICAÇÃO DO VALOR DA VARIÁVEL
- GERALMENTE USAMOS O CONST
*/

// let ano;
// ano = 2018;
// ano++;
// console.log(ano); // 2019

//let ano = 2020; // erro, redeclarou a variável

//======================================================================================================================================================================
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
  //console.log(var, marca, portas);
  //porque colocou var ao invés do nome da variável. E está acessando variáveis declaradas como CONST e LET fora do escopo delas.
  
  // Como corrigir o erro abaixo? //declarando a varias const dois = 2; fora da function, assim terá escopo Pai.
  const dois = 2; //declarei a variável no escopo pai.
  function somarDois(x) {
    
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois; //troquei o sinal de + pelo de divisão /
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = numero * 10;
  console.log(total);
  
