// //se não definirmos o RETURN a função vai retornar um UNDEFINED
// //o código da função é executado normalmente independente de ter RETURN ou não

// function imc(peso, altura) {
//     const imc = peso / (altura **2);
//     console.log(imc);
// }

// imc(80, 1.8); //retorna o imc
// console.log(imc(80, 1.8)); // retorna o imc E O UNDEFINED

// //UMA FUNÇÃO PODE RETORNAR QUALQUER TIPO DE DADO,INCLUSIVE OUTRA FUNÇÃO
// //FUNÇÃO QUE RETORNE VÁRIOS TIPOS DE DADOS NÃO É UMA BOA PRÁTICA

// function terceiraIdade(idade) {
//     if (typeof idade !== 'number') {
//         return 'Por favor, digite um número'
//     } else if (idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }

//console.log(terceiraIdade('oi'));

// function faltaVisitar(paisesVisitados){
//     var totalPaises = 193;
//     return `Faltam visitar ${totalPaises - paisesVisitados} países.`;
// }

// console.log(totalPaises);


//ESCOPO LÉXICO - funções conseguem acessar variáveis que foram criadas no contexto PAI.

var profissao = 'Desenvolvedor';

function dados() {
    var nome = 'Marcos Vinicius';
    var idade = 29;
    function outrosDados() {
        var enderco = 'Minas Gerais';
        var idade = 30;
        return `${nome}, ${idade}, ${enderco}, ${profissao}`;
    }
    return outrosDados;
}

console.log(dados());
//outrosDados();

