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
            <p id="PostIntroduction">
            Olá, meu amores! Hoje eu acordei com uma vontade de comer frutos do mar... então pensei: "Por que não
            prepara alguns camarões com legumes!?", e como não poderia ser diferente, vim trazer essa receita
            prática e deliciosa pra vocês.
            </p>
            <p>
            #Ingredientes:
            <br>
                - Abobrinha e tomate miúdo (a gosto);
                <br>
                - 4 ou 5 dentes de alho;
                <br>
                - 1 cebola;
                <br>
                - 1 xícara de arroz selvagem;
                <br>
                - 1 pitada de sal;
                <br>
                - 1 pitada de pimenta do reino;
                <br>
                - 4 camarões grandes.
            </p> 
            <p>
            #Como fazer:
            <br>
                - Coloque para refogar abobrinha e tomate miúdo  no alho e cebola. Sal e pimenta do reino no arroz selvagem cozido normalmemte. Refogue 4 camarões grandes até ficarem vermelhos;
                <br>
                - No meio do prato, desenforme o arroz. Coloque os legumes em volta do arroz e decore com os 4 camarões com o rabinho para cima. Decore com salsinha picada, e o azeite do regogado do camarão jogue por cima.
            </p>
        `,
        img: `./assets/assets/camarao-com-legumes.png`,
    },

    {
        index: 2,
        name: `Salada com Queijo de Cabra`,
        text: `
            <p id="PostIntroduction">
            Eu sei que não é fácil manter a vida fitness, várias e várias vezes dá aquela vontade comer uma besteirinha, mas pra acalmar essa vontade hoje vamos fazer uma recieta tão gostosa quanto qualquer besteira e, o melhor, totalmente saldável. 
            </p>
            <p>
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
            </p>
            <p>
            #Como Fazer:
            <br>
                - Corte a cenoura em lâminas bem finas, as maçãs em lâminas bem finas com casca, amêndoas socas com o socador levemente, os dois pões cortados em triângulo e posto no forno para asar.
                  Depois pegue a salada  com todos os ingredientes tempere com o molho e põem dentro do prato e coloque as fatias de pão nas laterais, com a rodela de queijo por cima.
                  [Obs: pôr por cima, os ingredientes que contém na salada, para decoração]. Finalize com salsicha picada.
            </p>
        `,
        img: `data:image/jpeg;base64,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`,
    },

    {
        index: 3,
        name: `Salada Primavera`,
        text: `
            <p id="PostIntroduction">
            Que tal darmos um sabor primaveril ao seu dia? Hoje vamos ser fitness, porém sem abrir mão do sabor. Para isso, eu trouxe para vocês esta recietinha deliciosa e páratica de salada primavera.
            </p>
            <p>
            #Ingredientes:
            <br>
                - 3 morangos;
                <br>
                - 2 kiws;
                <br>
                - 1 manga;
                <br>
                - Algumas frutinhas vermelhas.
            </p>
            <p>
            #Como Fazer:
            <br>
                Corte tudo em fatias. Faça a decoração em forma de flor com as frutas vermelhas na lateral e coloque um galho de hortelã em cima.
            </p>
        `,
        img: `./assets/assets/salada-primavera.png`,
    },

    {
        index: 4,
        name: `Ravióli com Peito de Frango`,
        text: `
            <p id="PostIntroduction">

            </p>
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
            <p id="PostIntroduction">
            Ah, os doces! O que seria da nossa vida sem eles, não é mesmo? Claro que não podemos exagerar, mas uma beiteirinha uma vez ou outra não faz mal - pelo contrário! Então hoje vamos nos dar o luxo de sair um pouquinho da dieta rsrs.
            </p>
            <p>
            #Ingredientes:
            <br>
                - 1 lata de Leite Condensado;
                <br>
                - 1 lata de Suco de Laranja;
                <br>
                - 4 Ovos.
            </p>
            <p>
            #Para a Calda:
            <br>
                Coloque 1 lata de caldo de laranja e 1/2 copo de Açúcar.
                Ponha para fever até engrossar.
                Pique umas cascas de Laranjas bem finas.
                Escorra e ferva junto com a calda e coloque em cima do pudim para decorar.
            </p>
            <p>
            #Como Fazer:
            <br>
                - Coloque, suco, os ovos e o leite condensado no liquidificador.
                <br> 
                - Bata uns 5 minutos, coloque em forminhas para assar, em Banho Maria por uns 30 minutos. Testando com um palito, até o palito sair limpo do Pudim.
            </p>
        `,
        img: `./assets/assets/pudim-de-laranja.png`,
    },

    {
        index: 6,
        name: `Petit Gateau`,
        text: `
            <p id="PostIntroduction">

            </p>
            <p>

            </p>
            <p>

            </p>
        `,
        img: `./assets/assets/petit-gateau.png`,
    },

    {
        index: 7,
        name: `Filé de Peixe com Couve`,
        text: ``,
        img: `./assets/assets/file-de-peixe-com-couve.png`,
    },

    {
        index: 8,
        name: `Salada Verão`,
        text: `
            <p id="PostIntroduction">
            No Brasil temos o costume de comer o abacate açucarado - ou seja, como algo doce -, e pode ser bem estranho à primeira vista pensar no abacate como um ingrediente de uma salada, mas acreditem em mim: deem uma chance para essa salada verão, os gringos sabem o que estão fazendo kkkk.
            </p>
            #Ingredientes:
            <br>
                - 1 abacate médio cortado em cubos;
                <br>
                - 300 g de camarão cozido;
                <br>
                - 1 tomate médio picado sem sementes;
                <br>
                - 3 cebolas picadas;
                <br>
                - 2 colheres (sopa) de sementes de abóbora picada;
                <br>
                - 1 dente de alho grande esmagado;
                <br>
                - 2 colheres (sopa) de sumo de limão;
                <br>
                - 1 colher (sopa) de azeite extravirgem;
                <br>
                - 1 colher (sopa) de vinagre balsâmico;
                <br>
                - 1 colher (sopa) de coentro picado;
                <br>
                - 1 colher (sopa) de hortelã fresca picada;
                <br>
                - folhas de alface e de rúcula;
                <br>
                - Sal e pimenta para temperar.
            </p>
            <p>
            #Como fazer:
            <br>
                - Misture todos os ingredientes, exceto a alface e rúcula;
                <br>
                - Sirva gelado e decore ao redor com as folhas de alface e rúcula.
            </p>
        `,
        img: `./assets/assets/foto-de-perfil-oficial-temporaria_files/salada-verao.jpg`,  
    },

    {
        index: 9,
        name: `Crème Brûlée`,
        text: `
            <p id="PostIntroduction">
            Oui, hoje teremos um pouco da França neste blog! A culinária francesa é muito famosa e tida como uma das melhores do mundo, e para provar isto eu trouxe para vocês uma receita deliciosa de Crème Brulés. Faisons-le!!
            </p>
            <p>
            #Ingredientes:
            <br>
                - 500 ml de creme de leite fresco;
                <br>
                - 5 gemas;
                <br>
                - 120 g de açúcar;
                <br>
                - 1 e 1/2 de extrato de baunilha.
            </p>
            <p>
            #Como fazer:
            <br>
                - Preaqueça o forno;
                <br>
                - Coloca o creme de leite na panela até ferver;
                <br>
                - Quando desligar o creme de leite, acrescente a baunilha e misture;
                <br>              
                - Deixe descansar;
                <br>               
                - Bata o açúcar com a gema ate obter um creme claro;
                <br>            
                - Misture o creme de leite ao creme com uma colher;
                <br> 
                - Deixe descansar por 10 minutos;
                <br>
                - Distribua o creme nos ramequins;
                <br>
                - Coloque os ramequins numa assadeira;
                <br>
                - Coloque água fervente dentro da assadeira  eles vão assar em banho-maria);
                <br>
                - Deixe assar por 40 minutos;
                <br>
                - Tire do forno, espere esfriar e coloque na geladeira por no minimo 6 horas;
                <br>
                - Na hora de servir, polvilhe açúcar em cima e passe o maçarico no açúcar para ficar a crocante.
            </p>
        `,
        img: `./assets/assets/foto-de-perfil-oficial-temporaria_files/crème-brûlée.jpg`,  
    },

    {
        index: 10,
        name: `Salada de Salmão Cru`,
        text: `
            <p id="PostIntroduction">
            Quem disse que só japoneses conseguem fazer receitas deliciosas com salmão? Hoje eu vou lhes ensinar a fazer essa saladinha de salmão cru deliciosa. Vamos nessa!
            </p>
            <p>
            #Ingredientes:
            <br>
                -

            </p>
            <p>
            #Como fazer:
            <br>
                - Cozinhe o ravióli por  4 minutos e refoque um peito de frango cortado ao meio; dore bem dos dois lados até ficar bem cozido;
                <br>
                - Molho: dore uma cebola picadinha na manteiga. Jogue creme de leite, um pouco de curry vermelho, deixe ferver e jogue em cima.
        `,
        img: `./assets/assets/salmao-cru.png`
    },

]

const Storege = {
    get() {
        return JSON.parse(localStorage.getItem("Datas:")) || {};
    },

    set(SubscriberDatas) {
        localStorage.setItem("Datas:", JSON.stringify(SubscriberDatas));
    }
}

const App = {
    inIt(){
        let confereSituation = Storege.get();
        if (confereSituation.situation === "subscribed"){
            let a = document.createElement('a');
            a.setAttribute('id', 'subscribe-Link');
            a.setAttribute('class', 'nav-link navlink');
            a.setAttribute('href', '#');
            a.setAttribute('onclick', 'Subscription.clickToUnFollow()');
            a.innerHTML = '<h6>Seguindo</h6>';
            console.log(a);

            document.getElementById("SubscribeLink").appendChild(a);
        }else{
            let a = document.createElement('a');
            a.setAttribute('id', 'subscribe-Link')
            a.setAttribute('class', 'nav-link navlink');
            a.setAttribute('href', '#');
            a.setAttribute('onclick', 'Subscription.clickToFollow()');
            a.innerHTML = '<h6>Seguir</h6>';

            document.getElementById("SubscribeLink").appendChild(a);
        }
    },

    reload(){
        let subscribeLink = document.getElementById("subscribe-Link");
        subscribeLink.parentNode.removeChild(subscribeLink);

        App.inIt();
    },
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

    closeRecipe(){ //Rever
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

    openNewPostForm(){
        document
            .querySelector('.Do-New-Post-container')
            .classList
            .add('actived');

        document
            .querySelector('.backgroud-do-new-post-container')
            .classList
            .add('actived');
    },

    closeNewPostForm(){
        document
            .querySelector('.Do-New-Post-container')
            .classList
            .remove('actived');

        document
            .querySelector('.backgroud-do-new-post-container')
            .classList
            .remove('actived');
    }

}

const Subscription = {
    clickToFollow(){
        let email = window.prompt('Seu e-mail:', '');
        
        if (email == "" || email == undefined || email == null){
            window.alert("Tem certeza que não quer ser um seguidor do Marilda's?");

            App.reload();
        }else{
            let SubscriberDatas = {
                email: email,
                situation: 'subscribed',
            }
            console.log(SubscriberDatas);
    
            Storege.set(SubscriberDatas);
    
            App.reload();
        }

    },

    clickToUnFollow(){
        let SubscriptionDatas = Storege.get();
        SubscriptionDatas.email = "";
        SubscriptionDatas.situation = "";
        
        Storege.set(Subscription);
        
        App.reload();
    },
}

const Config = { //Rever (provavelmente será removido)
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
                <h6><a class="linkes">Mudar Senha</a></h6>
            </div>
  
            <div id="Change-Photo-container">
                <h6><a class="linkes">Mudar Foto de Perfil</a></h6>
            </div>
  
            <div id="Unfollow-container" onclick="Config.Unfollow()">
                <h6><a class="linkes" onclick="Config.Unfollow()">Desinscrever-se</a></h6>
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
                <div id="Config-container">
                    <img src="./assets/assets/engrenagem-verde.png" alt="Configurações do perfil" onclick="Config.openConfig()" title="Configurações de perfil">
                </div>
                <div id="Profile-Photo-container">
                    <img src="./assets/assets/iconem-perfil.png" alt="Sua foto de perfil" title="Foto de perfil">
                </div>
        `;

        document.querySelector("#Header-Buttons-Container").appendChild(profileDiv);
    },

    Unfollow(){
        let account = Storege.get();
        account.userCod = "";
        account.name = "";
        account.password = "";
        account.nPosts = "";
        Storege.set(account);
        
        let configOptionsDiv = document.querySelector("#Config-options-container");
        document.querySelector("#Header-Buttons-Container").removeChild(configOptionsDiv);
        
        let subscribeButton = document.createElement('div');
        subscribeButton.setAttribute("id", "subscribe-button-container");
        subscribeButton.innerHTML = `<a class="linkes" href="#" onclick="Modal.openSubscribeForm()">Inscrever-se</a>`
        
        document.querySelector("#Header-Buttons-Container").appendChild(subscribeButton);

        
    },
}

const AccountDatas = { //Este bloco será o responsável por pegar os dados das contas dos suários do Local Storege para que possam ser usados para os mais dferentes fins.
    getAccountName(){
        const account = Storege.get();
        const accountName = account.name;
        return accountName
    }
}

App.inIt();