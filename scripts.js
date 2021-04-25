const PostedRecipes = [
    {
        index: 0,
        name: `Filé de Peixe`,
        text: `
            - 1 filé de peixe grelhado;
            - Uns pedaços de couve flor empanada no ovo e queijo ralado;
            - Corte meio pimentão e rechei com lentilha cozida e refogada;
            - Coloque no forno por 10 minutos;
            - Faça o molho com mostarda, creme de leite, sal e manteiga. Leve ao fogo os ingredientes até ferver e coloque em cima do peixe.
        `,
        img: `./assets/assets/file-de-peixe.png`,
    },

    {
        index: 1,
        name: `Camarão com Legumes`,
        text: `
            - Coloque para refogar abobrinha e tomate miúdo  no alho e cebola. Sal e pimenta do reino no arroz selvagem cozido normalmemte. Refogue 4 camarões grandes até ficarem vermelhos;
            - No meio do prato, desenforme o arroz. Coloque os legumes em volta do arroz e decore com os 4 camarões com o rabinho para cima. Decore com salsinha picada, e o azeite do regogado do camarão jogue por cima
        `,
        img: `./assets/assets/camarao-com-legumes.png`,
    },

    {
        index: 2,
        name: `Salada com Queijo de Cabra`,
        text: `
            #Ingradientes:
                -1 maçã verde;
                -1cenoura;
                -100g de amenda;
                -1 ramo de salsicha picada;
                -4 tomates miúdo;
                -1 fatia de pão de forma;
                -2 rodelas de queijo de quebra(mussarela);
                -1 colher de mel;
                -2 colher de mostarda;
                -2 colher de manteiga;
                -250 ml de cheme de leite;
                -Sal (a gosto); 
                -Pimenta do Reino;
                -1 colher de molho inglês;
                -Um punhado de orégano.

            #Preparo do Molho:
                2 colheres de manteiga para derreter, um colher de mostarda, uma colher de mel tudo para derreter na panela, depois que derreter coloca um pouco de orégano e 250 ml de creme de leite, quando tiver abrir fervura, coloca meia colher de molho inglês, deixa ferver e só coloca na sala quando o molho estiver frio.

            #Como Fazer:
                Corte a cenoura em lâminas bem finas, as maçãs em lâminas bem finas com casca, amêndoas socas com o socador levemente, os dois pões cortados em triângulo e posto no forno para asar.

                Depois pegue a salada  com todos os ingredientes tempere com o molho e põem dentro do prato e coloque as fatias de pão nas laterais, com a rodela de queijo por cima.

                Obs: pôr por cima, os ingredientes que contém na salada, para decoração.
                
                Finalize com salsicha picada.
        `,
        img: `./assets/assets/`,
    },

    {
        index: 3,
        name: `Salada Primavera`,
        text: `
            #Ingredientes:
                - 3 morangos;
                - 2 kiws;
                - 1 manga;
                - Algumas frutinhas vermelhas.
            
            #Como Fazer:
                Corte tudo em fatias. Faça a decoração em forma de flor com as frutas vermelhas na lateral e coloque um galho de hortelã em cima.
        `,
        img: `./assets/assets/salada-primavera.png`,
    },

    {
        index: 4,
        name: `Ravióli com Paito de Frango`,
        text: `
            - Cozinhe o ravióli por  4 minutos e refoque um peito de frango cortado ao meio; dore bem dos dois lados até ficar bem cozido.
            - Molho: dore uma cebola picadinha na manteiga. Jogue creme de leite, um pouco de curry vermelho, deixe ferver e jogue em cima
        `,
        img: `./assets/assets/ravioli-com-peito-de-frango.png`,
    },

    {
        index: 5,
        name: `Pudim de Laranja com Calda`,
        text: `
            #Ingredientes:
                - 1 lata de Leite Condensado.
                - 1 lata de Suco de Laranja.
                - 4 Ovos.

            #Para a Calda:
                Coloque 1 lata de caldo de laranja e 1/2 copo de Açúcar.
                Ponha para fever até engrossar.
                Pique umas cascas de Laranjas bem finas.
                Escorra e ferva junto com a calda e coloque em cima do pudim para decorar.

            #Como Fazer:
                Coloque, suco, os ovos e o leite condensado no liquidificador. 
                Bata uns 5 minutos, coloque em forminhas para assar, em Banho Maria por uns 30 minutos. Testando com um palito, até o palito sair limpo do Pudim.
        `,
        img: `./assets/assets/pudim-de-laranja.png`,
    },

    {
        index: 6,
        name: `Petit Gateau`,
        text: ``,
        img: `./assets/assets/petit-gateau.png`,
    },

    {
        index: 7,
        name: `Filé de Peixe com Couve`,
        text: ``,
        img: `./assets/assets/file-de-peixe-com-couve.png`,
    },

]

const ShowRecipe = {
    recipes: PostedRecipes,

    getPost(index){
        let Recipe = ShowRecipe.recipes[`${index}`];

        let p = document.createElement('p');
        p = `<p>${Recipe.text}</p>`;
        console.log(p);

        let img = document.querySelector('#Recipe-Image');
        img.setAttribute("src", `${Recipe.img}`);
        img.setAttribute("alt", `Imagem: ${Recipe.name}`);
        
        index = "";
    },

    hideRecipe(){

        let img = document.querySelector('#Recipe-Image');
        img.setAttribute('src', '');
        img.setAttribute('alt', '');
    },
    
}

const Modal = {
    openRecipe(index){
        document
            .querySelector('.Recipe-container')
            .classList
            .add('actived');

        document
            .querySelector('.backgroud-recipe-container')
            .classList
            .add('actived');

        ShowRecipe.getPost(index);
    },

    closeRecipe(){
        document
            .querySelector('.Recipe-container')
            .classList
            .remove('actived');

        document
            .querySelector('.backgroud-recipe-container')
            .classList
            .remove('actived');

        ShowRecipe.hideRecipe();
    },

    openSubscribeForm(){
        document
            .querySelector('.Subscribe-Form-Container')
            .classList
            .add('actived');

        document
            .querySelector('.backgroud-subscribe-container')
            .classList
            .add('actived');
    },

    closeSubscribeForm(){
        document
            .querySelector('.Subscribe-Form-Container')
            .classList
            .remove('actived');

        document
            .querySelector('.backgroud-subscribe-container')
            .classList
            .remove('actived');
    },

}


