const usuario = { nome: 'Diego', idade: 23 };
const returnIdade = (user) => user.idade ;

const name = 'Dudu';
const age = 25;
const objetNmId = (nm = 'Diego', id = 18) => ({nome: nm, idade: id});
console.log( objetNmId(name,age) );
console.log( objetNmId(name) );
console.log( objetNmId() );

const Minharomise = () => new Promise((resolve, reject) => resolve('Ola'));

