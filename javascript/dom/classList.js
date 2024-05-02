/*
=> CLASS LIST
- retorna uma lista com TODAS as calsse do elemnto. Permite adiconar, remover e verificar se contém

const menu = document.querySelector('.menu');

menu.className; retorna uma string
menu.classList; retorna uma lista de classes
menu.classList.add('ativo'); adiciona uma classe
menu.classList.add('ativo', 'mobile'); adiciona duas classes
menu.classList.remove('ativo'); remove uma classe
menu.classList.toggle('ativo'); // adiciona/remove a classe inativa
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); substitui uma classe
-------------------------------------------------------------------------------------
=> ATTRIBUTES
- retorna uma array-like com os atributos do elemento
-------------------------------------------------------------------------------------
=> getAttribute e setAttribute
-setAttribute = CRIA se não existir ou ATUALIZA. pode criar atributo e valor;
img.setAttibute('NovoAtributo', 'valor do novo atributo');

-Métodos(funções) qeu retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt

img.hasAttribute('id'); // true / false - verifica se possui algum atributo
Ex: se eu esquecer de colocar algum atributo 'Alt' na imagem. Isso é ruim para acessibilidade
    const possuiAlt = img.hasAttribute('alt');
    console.log(possuiAlt);

img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

-------------------------------------------------------------------------------------
=> READ ONLY E WRITABLE
- propriedades que não permitem a mudança de valores. São APENAS LEITURA

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, READ-ONLY
OBS: PARA SABER QUAIS SÃO READ-ONLY, LER DOCUMENTAÇÃO

*/

/*const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul');
menu.classList.remove('azul');
menu.classList.toggle('azul');
// console.log(menu.classList);

const animais = document.querySelector('.animais');
//console.log(animais.attributes);

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt') //pode colocar dentro de uma variável
img.setAttribute('alt', 'É uma raposa.'); //cria ou altera o alt
img.setAttribute('NovoAtributo', 'valor do novo atributo');

const possuiAlt = img.hasAttribute('title');
//console.log(possuiAlt);
//console.log(srcImg);

const carro = {
    portas: 4,
    andar: function(km){
        //console.log(`Andou ${km} quilômetros.`);
    }
}
*/


//********** EXERCÍCIOS **********

// Adicione a classe ativo a todos os itens do menu
    const itensMenu = document.querySelectorAll('.menu a');
    itensMenu.forEach((item) => {
        item.classList.add('ativo');
    })
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
        const possuiAlt = img.hasAttribute('alt');
        console.log(img, possuiAlt);
    })
    
// Modifique o href do link externo no menu
    const link = document.querySelector('a[href^="https"]');
    link.setAttribute('href', 'https://www.google.com.br');

    console.log(link);
