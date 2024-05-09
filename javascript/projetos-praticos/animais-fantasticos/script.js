function initTabNav() { //SEMPRE BOM ISOLAR O ESCOPO PARA MELHOR ORGANIZAÇÃO

    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if(tabMenu.length && tabContent.length) { //SÓ VAI ATIVAR SE ESSAS DUAS VARIÁVEIS EXISTIREM NO MEU CÓDIGO. 
    tabContent[0].classList.add('ativo'); //FAZ COM QUE O CONTEÚDO ESTEJA ATIVO AO RECARREGAR A PÁGINA. SE NÃO, NÃO APARECE NENHUM CONTEÚDO POR CONTA DA FUNÇÃO ABAIXO.

        function activeTab(index) { //ativa a classe de acordo com o número que for passado
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        }); 
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt'); //seleciona a dt no HTML
    const activeClass = 'ativo';
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass); //FAZ COM QUE O PRIMEIRO ITEM JÁ FIQUE ABERTO
        accordionList[0].nextElementSibling.classList.add(activeClass); //FAZ COM QUE O PRIMEIRO ITEM JÁ FIQUE ABERTO
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);//AO CLICAR NO DT, ADICIONA A class 'ativo' NO PRÓXIMO ITEM, OU SEJA, NO DD
            //this => vai fazer referência ao item que estiver clicando no momento. 
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        }); 
    }
    
}
initAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start', //alinha o bloco ao ínicio da seção
        });


        // //FAZ A ROLAGEM SUAVE. AINDA NÃO SUPORTADO EM TODOS OS BROWSERS
        // const topo = section.offsetTop;
        // window.scrollTo({ 
        //     top: topo,
        //     behavior: 'smooth'
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection); 
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll); 
    } 
}
initAnimacaoScroll();
