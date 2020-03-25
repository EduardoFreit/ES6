class list{ // classe pai
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends list{ //classe filha (herda todos os metodos da pai(list))
    constructor(){
        super();
        this.usuario = 'Dudu';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

class Matematica{ //classe utiliaada so para ajudar a fazer algo, nao precisa de um contructor
    static soma(a , b){ //metodo estatic (serve so para retornar informaçoes)
        return a+b;
    }
}

var MinhaLista = new TodoList();
document.querySelector('#novoTodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}
MinhaLista.mostraUsuario()

c = Matematica.soma(2,3); //Não precisa instanciar uma classe com o 'new'