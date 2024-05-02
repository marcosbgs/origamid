/*
=> OUTERHTML, INNERHTML E INNERTEXT
    - retornam uma STRING contendo o HTML ou TEXTO
    - podemos atribuir um novo valor para as mesmas.
    - element.innerText = 'Novo Texto'
    - EXEMPLOS
        const menu = document.querySelector('.menu');

        menu.outerHTML; // todo o html do elemento
        menu.innerHTML; // mostra o html interno, com as tags
        menu.innerText; // mostra somente o texto, sem tags

        menu.innerText = '<p>Texto</p>'; // a tag vai como texto
        menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

        outerHTML --> SUBSTITUI
        innerHTML --> COLOCA DENTRO DA TAG JÁ EXISTENTE

=> TRANSVERSING
    - FORMA DE NAVEGAR PELO DOM
    -EXEMPLOS 
        const lista = document.querySelector('.animais-lista');

        lista.parentElement; // mostra o elemento pai
        lista.parentElement.parentElement; // pai do pai
        lista.previousElementSibling; // elemento acima 
        lista.nextElementSibling; // elemento abaixo

        lista.children; // HTMLCollection com os filhos
        lista.children[0]; // primeiro filho
        lista.children[--lista.children.length]; // último filho

        lista.querySelectorAll('li'); // todas as LI's
        lista.querySelector('li:last-child'); // último filho
=> ELEMENT VS NODE
    - ELEMENT -> as tags HTML
    - NODE -> pode ser qualquer coisa. Element, espaço, texto, comentário
    - EXEMPLOS
        const lista = document.querySelector('.animais-lista');

        lista.previousElementSibling; // elemento acima
        lista.previousSibling; // node acima

        lista.firstChild; // primeiro node child
        lista.childNodes; // todos os node child

=> MANIPULANDO ELEMENTOS
    - mover elementos no DOM
    - EXEMPLOS
        const lista = document.querySelector('.animais-lista');
        const contato = document.querySelector('.contato');
        const titulo = contato.querySelector('.titulo');

        contato.appendChild(lista); // move lista para o final de contato
        contato.insertBefore(lista, titulo); // insere a lista antes de titulo
            - tagPai.insertBefore(ElementoQueQueroMover, tagFilho); TAGPAI E TAGFILHO SÃO OBRIGATÓRIOS
        contato.removeChild(titulo); // remove titulo de contato
        contato.replaceChild(lista, titulo); // substitui titulo por lista

=> NOVOS ELEMENTOS
    - cria novos elementos
    - usa o MÉTODO createElement();      
    - EXEMPLOS
        const animais = document.querySelector('.animais');

        const novoH1 = document.createElement('h1');
        novoH1.innerText = 'Novo Título';
        novoH1.classList.add('titulo');

        animais.appendChild(novoH1);

=> CLONAR ELEMENTOS
    - cria um elemento baseado no anterios
    - usa o MÉTODO cloneNode();
    - EXEMPLOS
        const titulo = document.querySelector('h1');
        const titulo2 = document.querySelector('h1');
        const novoTitulo = titulo;
        // titulo, titulo2 e novoTitulo são iguais

        const cloneTitulo = titulo.cloneNode(true);
            - se eu passar TRUE, clona os FILHOS também
            - se eu passar FALSE, traz só a tag, SEM FILHOS
        const contato = document.querySelector('.contato');
        contato.appendChild(cloneTitulo);

  


*/



//  const h1 = document.querySelector('h1');
//  const animaisLista = document.querySelector('.animais-lista');

//  h1.innerHTML;

//  console.log(animaisLista.innerHTML); => mostra todo o HTML com as LI 
