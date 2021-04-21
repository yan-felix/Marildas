const GetDatasPost = {
    getCodsPost(){
        // Pegar os códigos (txt[n] e img[n]) do post e usá-lo para pegar o texto(receita) e a imagem correspondentes a estes códigos.
    }
}

const PostedRecipesVisualization = {
    ToShowRecipe(){
        let p = document.createElement('p');
        document.querySelector('#p-container').appendChild(p);

        let img = document.createElement('img');
     /* img.setAttribute("src", "*endereço da imagem*"); */
        img.setAttribute("alt", '"Imagem da Receita Pronta"');
        document.querySelector('#Recipe-Image-container').appendChild(img);
    },

    ToHideRecipe(){
        document.querySelector('#p-container').remove('p');

        document.querySelector('#Recipe-Image-container').removeChild('img');
    },
    
}

const Modal = {
    open(){
        document
            .querySelector('.Recipe-container')
            .classList
            .add('actived');

        document
            .querySelector('.backgroud-recipe-container')
            .classList
            .add('actived');

        PostedRecipesVisualization.ToShowRecipe();
    },

    close(){
        document
            .querySelector('.Recipe-container')
            .classList
            .remove('actived');

        document
            .querySelector('.backgroud-recipe-container')
            .classList
            .remove('actived');

        PostedRecipesVisualization.ToHideRecipe();
    },

}


