const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var idades = usuarios.map( item => item.idade);
var empRocketseat = usuarios.filter( item => (item.empresa ==='Rocketseat' && item.idade > 18 ) );
var empGoogle = usuarios.find( item => item.empresa === 'Google' );


var idadesX2 = usuarios.map( item => ({...item, idade: item.idade*2}) ).filter( item => item.empresa ==='Rocketseat');


console.log(idadesX2);