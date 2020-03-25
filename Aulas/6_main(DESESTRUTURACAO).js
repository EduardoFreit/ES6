const usuario = {
    nome: 'Jose',
    idade: 23,
    endereco: {
        cidade: 'Nazare',
        estado: 'PE'
    }
};

//desestruturando um objeto, para ficar mais facil pegar os seus argumentos
const {nome, idade, endereco: { cidade } } = usuario;

function mostraUsuario ( {nome, idade, endereco:{ cidade } } ){
    console.log(nome, idade, cidade);
}

console.log(nome);
console.log(idade);
console.log(cidade);

mostraUsuario(usuario);