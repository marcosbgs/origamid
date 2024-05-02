function Livro(titulo, autor, editora, anoLancamento) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoLancamento = anoLancamento;
}

const livro1 = new Livro('Harry Potter e o Prisioneiro de Askaban', 'J.K Rowling', 'Rocco', 2000);

console.log(livro1);

function Aluno(nome, dtNasc, curso, periodo) {
    this.nome = nome;
    this.dtNasc = dtNasc;
    this.curso = curso;
    this.periodo = periodo;
    this.matricula = true;
}

const aluno1 = new Aluno('Marcos Vinicius', '07/08/1994', 'Análise e Desenvolvimento de Sistemas', '1º período');

console.log(aluno1);


function Celular(marca, modelo, ano, cor, operadora) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.operadora = operadora;
}

const celular1 = new Celular('Xiomi', 'S11 Lite', 2022, 'Preto', 'TIM');
console.log(celular1);