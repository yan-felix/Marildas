const PostedRecipes = [
    {
        index: 0,
        name: `Filé de Peixe`,
        text: `
            - 1 filé de peixe grelhado;
            <br>
            - Uns pedaços de couve flor empanada no ovo e queijo ralado;
            <br>
            - Corte meio pimentão e rechei com lentilha cozida e refogada;
            <br>
            - Coloque no forno por 10 minutos;
            <br>
            - Faça o molho com mostarda, creme de leite, sal e manteiga. Leve ao fogo os ingredientes até ferver e coloque em cima do peixe.
        `,
        img: `./assets/assets/file-de-peixe.png`,
    },

    {
        index: 1,
        name: `Camarão com Legumes`,
        text: `
            - Coloque para refogar abobrinha e tomate miúdo  no alho e cebola. Sal e pimenta do reino no arroz selvagem cozido normalmemte. Refogue 4 camarões grandes até ficarem vermelhos;
            <br>
            - No meio do prato, desenforme o arroz. Coloque os legumes em volta do arroz e decore com os 4 camarões com o rabinho para cima. Decore com salsinha picada, e o azeite do regogado do camarão jogue por cima
        `,
        img: `./assets/assets/camarao-com-legumes.png`,
    },

    {
        index: 2,
        name: `Salada com Queijo de Cabra`,
        text: `
            #Ingradientes:
            <br>
                -1 maçã verde;
                <br>
                -1cenoura;
                <br>
                -100g de amenda;
                <br>
                -1 ramo de salsicha picada;
                <br>
                -4 tomates miúdo;
                <br>
                -1 fatia de pão de forma;
                <br>
                -2 rodelas de queijo de quebra(mussarela);
                <br>
                -1 colher de mel;
                <br>
                -2 colher de mostarda;
                <br>
                -2 colher de manteiga;
                <br>
                -250 ml de cheme de leite;
                <br>
                -Sal (a gosto);
                <br> 
                -Pimenta do Reino;
                <br>
                -1 colher de molho inglês;
                <br>
                -Um punhado de orégano.
            <br>
            #Preparo do Molho:
                2 colheres de manteiga para derreter, um colher de mostarda, uma colher de mel tudo para derreter na panela, depois que derreter coloca um pouco de orégano e 250 ml de creme de leite, quando tiver abrir fervura, coloca meia colher de molho inglês, deixa ferver e só coloca na sala quando o molho estiver frio.
            <br>
            #Como Fazer:
                Corte a cenoura em lâminas bem finas, as maçãs em lâminas bem finas com casca, amêndoas socas com o socador levemente, os dois pões cortados em triângulo e posto no forno para asar.

                Depois pegue a salada  com todos os ingredientes tempere com o molho e põem dentro do prato e coloque as fatias de pão nas laterais, com a rodela de queijo por cima.

                [Obs: pôr por cima, os ingredientes que contém na salada, para decoração].
                
                Finalize com salsicha picada.
        `,
        img: `./assets/assets/`,
    },

    {
        index: 3,
        name: `Salada Primavera`,
        text: `
            #Ingredientes:
            <br>
                - 3 morangos;
                <br>
                - 2 kiws;
                <br>
                - 1 manga;
                <br>
                - Algumas frutinhas vermelhas.
            <br>
            #Como Fazer:
            <br>
                Corte tudo em fatias. Faça a decoração em forma de flor com as frutas vermelhas na lateral e coloque um galho de hortelã em cima.
        `,
        img: `./assets/assets/salada-primavera.png`,
    },

    {
        index: 4,
        name: `Ravióli com Paito de Frango`,
        text: `
            - Cozinhe o ravióli por  4 minutos e refoque um peito de frango cortado ao meio; dore bem dos dois lados até ficar bem cozido.
            <br>
            - Molho: dore uma cebola picadinha na manteiga. Jogue creme de leite, um pouco de curry vermelho, deixe ferver e jogue em cima
        `,
        img: `./assets/assets/ravioli-com-peito-de-frango.png`,
    },

    {
        index: 5,
        name: `Pudim de Laranja com Calda`,
        text: `
            #Ingredientes:
            <br>
                - 1 lata de Leite Condensado;
                <br>
                - 1 lata de Suco de Laranja;
                <br>
                - 4 Ovos.
            <br>
            #Para a Calda:
            <br>
                Coloque 1 lata de caldo de laranja e 1/2 copo de Açúcar.
                Ponha para fever até engrossar.
                Pique umas cascas de Laranjas bem finas.
                Escorra e ferva junto com a calda e coloque em cima do pudim para decorar.
            <br>
            #Como Fazer:
            <br>
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

const Storege = {
    get() {
        return JSON.parse(localStorage.getItem("AccountDatas:")) || {};
    },

    set(Account) {
        localStorage.setItem("AccountDatas:", JSON.stringify(Account));
    }
}

const App = {
    inIt(){
        let confirmAccount = Storege.get();
        console.log(confirmAccount);
        if (confirmAccount.userCod !== ""){
            CreateAccount.ConfirmSubscribe();
        }else{
            let divSubscribe = document.createElement('div');
            divSubscribe.setAttribute("id", "subscribe-button-container");
            divSubscribe.innerHTML = `<a id="subscribe-button" class="linkes" href="#" onclick="Modal.openSubscribeForm()">Inscreva-se</a>`;
            document.querySelector("#Header-Buttons-Container").appendChild(divSubscribe);
        }
    }
}

const ShowRecipe = {
    recipes: PostedRecipes,

    getPost(index){
        const Recipe = ShowRecipe.recipes[`${index}`];
        let H3html = `${Recipe.name}`;
        let Phtml = `
                ${Recipe.text}
        `;

        let h3 = document.createElement('h3');
        h3.setAttribute("id", "h3-recipe");
        h3.innerHTML = H3html;
        document.querySelector("#name-recipe-container").appendChild(h3);

        let p = document.createElement('p');
        p.setAttribute("id", "p-recipe");
        p.innerHTML = Phtml;
        document.querySelector("#p-container").appendChild(p);
        console.log(p);

        const img = document.querySelector('#Recipe-Image');
        img.setAttribute("src", `${Recipe.img}`);
        img.setAttribute("alt", `Imagem: ${Recipe.name}`);
        
        index = "";
    },

    hidePost(){
        let nodeH3 = document.getElementById("h3-recipe");
        if (nodeH3.parentNode){
            nodeH3.parentNode.removeChild(nodeH3);
        }

        let nodeP = document.getElementById("p-recipe");
        if (nodeP.parentNode){
            nodeP.parentNode.removeChild(nodeP);
        }

        const img = document.querySelector('#Recipe-Image');
        img.setAttribute('src', '');
        img.setAttribute('alt', '');
    }
    
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

        ShowRecipe.hidePost();
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

const Config = {
    openConfig(){
        let profileDiv = document.querySelector("#Profile-container");
        profileDiv.parentElement.removeChild(profileDiv);

        let configDiv = document.createElement('div');
        configDiv.setAttribute("id","Config-options-container");
        configDiv.innerHTML = `
            <div id="Close-Config-options-container">
                <img src="./assets/assets/throw-error-button.png" alt="Fechar Configrações" onclick="Config.closeConfig()">
            </div>

            <div id="Change-Password-container">
                <h6>Mudar Senha</h6>
            </div>
  
            <div id="Change-Photo-container">
                <h6>Mudar Foto de Perfil</h6>
            </div>
  
            <div id="Unfollow-container">
                <h6>Desinscrever-se</h6>
            </div>
        `;
        document.querySelector("#Header-Buttons-Container").appendChild(configDiv);
    },

    closeConfig(){
        let configOptionsDiv = document.querySelector("#Config-options-container");
        configOptionsDiv.parentNode.removeChild(configOptionsDiv);

        let profileDiv = document.createElement('div');
        profileDiv.setAttribute("id", "Profile-container");
        profileDiv.innerHTML = `
            <div id="Profile-container">
                <figure id="Config-container">
                    <img src="./assets/assets/engrenagem-verde.png" alt="Configurações do perfil" onclick="Config.openConfig()" title="Configurações de perfil">
                </figure>

                <figure id="Profile-Photo-container">
                    <img src="./assets/assets/iconem-perfil.png" alt="Sua foto de perfil" title="Foto de perfil">
                </figure>
            </div>`;
        document.querySelector("#Header-Buttons-Container").appendChild(profileDiv); 
    },
}

const CreateAccount = {
    Name: document.querySelector("#SubscribeName"),
    Password: document.querySelector("#SubscribePassword"),
    NPosts: 0,

    ConfirmSubscribe(){
        let subscribedDiv = document.querySelector("#subscribe-button-container");
        subscribedDiv.parentElement.removeChild(subscribedDiv);

        let profileDiv = document.createElement('div');
        profileDiv.setAttribute("id", "Profile-container");
        profileDiv.innerHTML = `
            <div id="Profile-container">
                <figure id="Config-container">
                    <img src="./assets/assets/engrenagem-verde.png" alt="Configurações do perfil" onclick="Config.openConfig()" title="Configurações de perfil">
                </figure>

                <figure id="Profile-Photo-container">
                    <img src="./assets/assets/iconem-perfil.png" alt="Sua foto de perfil" title="Foto de perfil">
                </figure>
            </div>`;
        document.querySelector("#Header-Buttons-Container").appendChild(profileDiv);  
    },

    CloseErrorOfSubscribeForm(){
        let error = document.getElementById('Throw-Error-container');
        error.parentNode.removeChild(error);
    },

    RegisterNewAccount(){
        let Account = {
            name: CreateAccount.Name.value,
            password: CreateAccount.Password.value,
            userCod: CreateAccount.Name.value + CreateAccount.Password.value,
            nPosts: CreateAccount.NPosts,
        }

        if (Account.name.trim() === "" || Account.password.trim() === "" || Account.userCod === Account.name){
            let error = document.createElement('div');
            error.setAttribute("id", "Throw-Error-container");
            error.innerHTML = `
                <img id="Close-Error-Button" src="./assets/assets/throw-error-button.png" alt="Saída da Receita" onclick="CreateAccount.CloseErrorOfSubscribeForm()">
                <h5>
                    Opa! Parece que você esqueceu de alguma coisa. Por favor, incira um nome e uma senha válidaos, eles são importantes para o funcionamento do site e necessários para a formação dos dados que identificarão sua conta.
                </h5>
            `
            document.querySelector(".Subscribe-Form-Container").appendChild(error); 
        }else{
            Storege.set(Account);
            CreateAccount.ConfirmSubscribe();
            Modal.closeSubscribeForm();
        }

        

    },
}

App.inIt();



