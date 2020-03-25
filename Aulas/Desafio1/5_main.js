const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

function soma ( a, b, ...c ){
    return a + b + c.reduce((total, next) => total + next);
}

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

var usuario2 = { ...usuario, nome: 'Gabriel' };
var usuario3 = { ...usuario, endereco: {cidade: 'Lontra'} };