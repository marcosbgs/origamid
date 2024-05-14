export default function initAccordion() {
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
