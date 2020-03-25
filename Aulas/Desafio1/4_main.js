const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

function mostraInfo( {nome, idade} ) {
    return `${nome} tem ${idade} anos.`;
}

const x = mostraInfo({ nome: 'Diego', idade: 23 });
console.log(x);