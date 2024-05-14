/*
=> DATASET é utilizado no DOM igual se utiliza CLASSE

=> A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.
    <div data-anima="left" data-tempo="1000">Div 1</div>
    <div class="anima-left tempo-1000">Div 2</div>

=> NOMEMCLATURA
    - Javascript não aceita "-" como nome de propriedade
    - transforma a próxima letra em MAIÚSCULO
    - Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
    - posso escrever o traço, mas tenho que saber que o JS irá transformar
    - EXEMPLOS:
        data-anima-scroll-up-teste ==> animaScrollUpTeste

=> UTILIZAÇÃO
    - const div = document.querySelector('[data-cor]'); --> SELETOR DE ATRIBUTO CSS
*/

const h1 = document.querySelector('h1');

console.log(Object.prototype.toString.call(h1));

console.log(h1.dataset);