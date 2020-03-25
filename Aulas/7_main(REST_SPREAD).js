//REST
const usuario = {
    nome: 'José',
    idade: 23,
    empresa: 'RocketSeat'
}

const { nome, ...resto } = usuario; // (...) = operadot REST - pega o resto das informações de um objeto
console.log(nome);
console.log(resto);

const arr = [1, 5, 8, 11, 55, 88];
const [a, b, ...c] = arr; //a = posição1(1), b = posição2(5), c = resto das posições(8,11,55,88)
console.log(c);

function soma(a, b, ...params){ // params = array com todos os outros parametros, a partir do 3º
    return a - b + params.reduce((total, next) => total + next); // usando arrow function
}
console.log(soma(1, 2 , 3 , 4 , 5, 6, 7));

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // quando os argumentos começam com um '...', faz-se um SPREAD (Uniao de vetores)
console.log(arr3);

const usuario1 = {
    nome: 'Dudu',
    idade: 27,
    empresa: 'VASP'
}
const usuario2 = {...usuario1, nome: 'Luiz'}; //Cria o usuario2 a partir do usuario1, e depois muda a variavel nome por SPREAD
console.log(usuario2);
