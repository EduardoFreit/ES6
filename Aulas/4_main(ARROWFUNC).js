//Operações com array
var arr = [1, 3, 4, 5, 4, 9];
/*
const newArr = arr.map(function(item){ //item = cada item do vetor, index = posição de cada item
    return item*2;
});*/

const newArr = arr.map(item => item*2); //arrow function(msm funcionamento da função acima)

//console.log(newArr);

const teste0 = () => 'ola'; //retornando uma string
const teste1 = () => 1; // retornando um numero
const teste2 = () => [1,2,3]; //retornando um array
const teste3 = () => ({nome: 'Dudu'}); //retornando um objeto(colocar entre parenteses)


console.log(teste3());