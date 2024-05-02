/*
=> addEventListener
    - ADICIONA UMA FUNÇÃO AO ELEMENTO
    - CHAMADA DE CALLBACK - dispara caso alguma coisa ocorra
    - É ATIVADA ASSIM QUE ALGUM EVENTO OCORRER
    - BOA PRÁTICA DECLARAR A FUNÇÃO SEPARADA.
        const img = document.querySelector('img');
        function callback () {
            console.log('Clicou');
        }
        img.addEventListener('click', callback);

    - img.addEventListener('click', function () {
        console.log('Clicou');
    })

    - img.addEventListener('click', () => {
        console.log('Clicou');
    })

====================================================================================

=> Event
        - O PRIMEIRO PARAMETRO DO CALLBACK É O EVENTO QUE OCORREU
    => PROPRIEDADES DO EVENT
        - const animaisLista = document.querySelector('.animais-lista');

            function executarCallback(event) {
            const currentTarget = event.currentTarget; // this - referente ao item que adicionou o evento
            const target = event.target; // onde o clique ocorreu
            const type = event.type; // tipo de evento - RETORNA STRING
            const path = event.path;
            console.log(currentTarget, target, type, path);
            }

            animaisLista.addEventListener('click', executarCallback);

===================================================================================

=> EVENT.PREVENTDEFAULT() - é um MÉTODO = FUNÇÃO
    - PREVINE O COMPORTAMENTO PADRÃO DO EVENTO. POR EXEMPLO, SE AO CLICAR EM UM LINK EXTERNO, SE TIVER O EVENT.PREVENTDEFAULT(), POSSO PEDIR PARA NAO IR PARA A PAGINA.

        const linkExterno = document.querySelector('a[href^="http"]');

        function clickNoLink(event) {
            event.preventDefault();
            console.log(event.currentTarget.href);
        }

        linkExterno.addEventListener('click', clickNoLink);

=====================================================================================
=> THIS
    - FAZ REFERÊNCIA A DIFERENTES OBJETOS, DEPENDENDO DO CONTEXTO
    - NOS EVENTOS, FAZ REFERÊNCIA AO "ELEMENTO" EM QUE O addEventListener foi add
        const img = document.querySelector('img');

        function callback(event) {
            console.log(this); // retorna a imagem
            console.log(this.getAttribute('src'));
        }

        img.addEventListener('click', callback);
        OBS: Geralmente igual ao event.currentTarget

====================================================================================
=> DIFERENTES EVENTOS
    -CLICK:
    -SCROLL:
    -RESIZE: MUDA O TAMANHO DA TELA APARACE O EVENTO
    -KEYDOWN: PRESSIONA A TECLA
    -KEYUP: SOLTA A TECLA
    -MOUSEENTER: PASSA O MOUSE POR CIMA
    -PODEM SER ADD A DIFERENTES ELEMENTOS, COMO O "WINDOW" E "DOCUMENT"

        const h1 = document.querySelector('h1');

        function callback(event) {
            console.log(event.type, event);
        }

        h1.addEventListener('click', callback);
        h1.addEventListener('mouseenter', callback);
        window.addEventListener('scroll', callback);
        window.addEventListener('resize', callback);
        window.addEventListener('keydown', callback);

====================================================================================
=> KEYBOARD
    - ADICIONA ATALHOS PARA FACILITAR A NAVEGAÇÃO DO SITE ATRAVÉS DO EVENTO KEYBOARD
        function handleKeyboard(event) {
            if(event.key === 'a')
                document.body.classList.toggle('azul');
            else if(event.key === 'v')
                document.body.classList.toggle('vermelho');
        }

        window.addEventListener('keydown', handleKeyboard);

=====================================================================================
=> FOREACH E EVENTOS 
    - FOREACH FUNCIONA SÓ COM NODE LIST
    - o método addEventListener é adicionado a um elemento apenas
    - para adicionar em cada um dos elementos da página, temos que criar um loop
        const imgs = document.querySelectorAll('img');

        function imgSrc(event) {
            const src = event.currentTarget.getAttribute('src');
            console.log(src);
        }

        imgs.forEach((img) => {
            img.addEventListener('click', imgSrc);
        });


*/

// const img = document.querySelector('img');
// function callback () {
//     console.log('Clicou');
// }

// img.addEventListener('click', callback);
//=================================================================================
// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//     console.log(event.currentTarget);
//     console.log(event.target);
//     console.log(event.type);
// }

// animaisLista.addEventListener('click', callbackLista);

//===================================================================================

// const linkExterno = document.querySelector('a[href^="https"]');

// function handleLinkExterno(event) {
//     event.preventDefault();
//     //console.log(event);
//     console.log(this);
// }

// linkExterno.addEventListener('click', handleLinkExterno);

//===================================================================================
// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

//==================================================================================
// function handleKeyboard(event) {
//     if(event.key === 'f') {
//         document.body.classList.toggle('fillscreen');
//     }
//     console.log(event.key);
// }

// window.addEventListener('keydown', handleKeyboard);

//==================================================================================
// const imgs = document.querySelectorAll('img');

// function handleImgs(event) {
//     console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', handleImgs);
// })
//==================================================================================
// *********** EXERCÍCIOS ***************

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno (event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
    //this.classList.add('ativo'); MESMA COISA DA LINHA ACIMA
}

linksInternos.forEach((href) => {
    href.addEventListener('click', handleLinkInterno);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

//console.log(todosElementos);

function handleClick (event) {
     console.log(event.currentTarget);
}
todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleClick);
})



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) {
    if(event.key === 't')
        document.documentElement.classList.toggle('zoomTexto');
        //documentElement = HTML
        //document.html.classList.toggle('zoomTexto'); MESMA COISA DA LINHA 232
}

window.addEventListener('keydown', handleKeyboard);
