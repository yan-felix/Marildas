const PostedRecipes = [
    {
        index: 1,
        name: `Filé de Peixe`,
        text: `
            - 1 filé de peixe grelhado;
            - Uns pedaços de couve flor empanada no ovo e queijo ralado;
            - Corte meio pimentão e rechei com lentilha cozida e refogada;
            - Coloque no forno por 10 minutos;
            - Faça o molho com mostarda, creme de leite, sal e manteiga. Leve ao fogo os ingredientes até ferver e coloque em cima do peixe.
        `,
        img: `./assets/assets/file-de-peixe`,
    },

    {
        index: 2,
        name: `Camarão com Legumes`,
        text: `
            - Coloque para refogar abobrinha e tomate miúdo  no alho e cebola. Sal e pimenta do reino no arroz selvagem cozido normalmemte. Refogue 4 camarões grandes até ficarem vermelhos;
            - No meio do prato, desenforme o arroz. Coloque os legumes em volta do arroz e decore com os 4 camarões com o rabinho para cima. Decore com salsinha picada, e o azeite do regogado do camarão jogue por cima
        `,
        img: `./assets/assets/camarao-com-legumes`,
    },

]

const GetDatasPost = {
    recipes: PostedRecipes,

    getPost(index){
        
        
    }
}

const ShowRecipe = {
    getPost(index){
        let Recipe = GetDatasPost.recipes[`${index}`];
        let p = document.createElement('p');
        document.querySelector('#p-container').appendChild(p);

        let img = document.createElement('img');
        img.setAttribute("src", "./assets/assets/camarao-com-legumes.png");
        img.setAttribute("alt", '"Imagem da Receita Pronta"');
        document.querySelector('#Recipe-Image-container').appendChild(img);
    },

    hideRecipe(){
        document.querySelector('#p-container').remove('p');

        document.querySelector('#Recipe-Image-container').removeChild('img');
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

}


