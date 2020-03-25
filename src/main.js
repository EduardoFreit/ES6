import api from './api';//importando api criada

class App {
    constructor() {
        this.repositories = [];//guardar toda a lista de repositorios do github

        this.formEl = document.querySelector('#repo-form');//selecionando a form de id=repo-form
        this.listEl = document.querySelector('#repo-list');//selecionando a list de id=repo-list
        this.inputEl = document.querySelector('input[name=repository]');
        this.registerHandlers();
    }

    registerHandlers() {//vai registrar os eventos
        this.formEl.onsubmit = event => this.addRepository(event); //passando o evento da form para addrepository, event = clickou no botão 'Adiconar'
    }

    setLoading( loading = true ) {
        if(loading === true){            
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Carregando...'));
            loadEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadEl);
        }else{
            document.querySelector('#loading').remove();
        }
    }

    async addRepository(event) {// async pq tem uma requisição assincrona no github
        event.preventDefault();// não vai deixar o form recarregar  a pagina / ao enviar um metodo get/post

        const repoInput = this.inputEl.value; //pegando o valor do input texto
        
        if(repoInput === '') //verificando se algo foi digitado no campo texto
            return;
        
        try{ 
            this.setLoading();//chamando função carregando
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner:{avatar_url} } = response.data; //desetruturando o os dados da api

            this.repositories.push({
                name, //short object sintax
                description,
                avatar_url,
                html_url,
            });
            this.render();
        }catch(err){ // envia um erro se nao encotrar resposta para a busca do repositório
            alert('O repositorio não existe!');
        }
        this.setLoading(false);//desligando função carregando
        this.inputEl.value = ''; //zerando  o campo do imput onde fica o texto
    }

    render() {  
        this.listEl.innerHTML = '';//apagar elementos da lista

        //percorrer o vetor
        this.repositories.forEach(repo => {
            //criando elemento html pra imagem
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            //criando elemento html pra titulo
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            //criando elemento html pra descrição
            let documentEl = document.createElement('p');
            documentEl.appendChild(document.createTextNode(repo.description));
            
            //criando elemento html pra link do repositorio
            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');//'_blank' = abrir nova aba
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            //criando elemento html pra elemento da lista 'li'
            let listItemEL = document.createElement('li');

            //colocando elementos em li
            listItemEL.appendChild(imgEl);
            listItemEL.appendChild(titleEl);
            listItemEL.appendChild(documentEl);
            listItemEL.appendChild(linkEl);

            //colocando o elemento li em ul
            this.listEl.appendChild(listItemEL);
        });
    }
}

new App();