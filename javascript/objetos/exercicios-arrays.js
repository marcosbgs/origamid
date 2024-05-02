const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValorComidas = comidas.shift();
console.log(primeiroValorComidas);
console.log(comidas);
// Remova o último valor de comidas e coloque em uma variável
console.log(comidas);
const ultimoValorComidas = comidas.pop();
console.log(ultimoValorComidas);
console.log(comidas);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
console.log(estudantes);
// Arrume os estudantes em ordem alfabética
const estudantesOrdemAlfabetica = estudantes.sort();
console.log(estudantesOrdemAlfabetica);
// Inverta a ordem dos estudantes
const estudantesOrdemInvertida = estudantes.reverse();
console.log(estudantesOrdemInvertida);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
console.log(html);
html = html.join('ul');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros);
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayOriginalClone = carros.slice();
console.log(arrayOriginalClone);
carros.pop();
console.log(carros);
console.log(arrayOriginalClone);

