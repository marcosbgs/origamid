export default function initTabNav() { //SEMPRE BOM ISOLAR O ESCOPO PARA MELHOR ORGANIZAÇÃO

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
