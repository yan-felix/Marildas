const Modal = {
    open(){
        document
            .querySelector('.Recipes-container')
            .classList
            .add('actived')

        document
            .querySelector('.backgroud-recipes')
            .classList
            .add('actived')
    },

    close(){
        document
            .querySelector('.Recipes-container')
            .classList
            .remove('actived')

        document
            .querySelector('.backgroud-recipes')
            .classList
            .remove('actived')
    }
}
