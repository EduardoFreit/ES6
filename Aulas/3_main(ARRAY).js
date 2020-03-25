//Operações com array
var arr = [1, 3, 4, 5, 4, 9];

//map = aplica uma função em ccada parte do array 
const newArr = arr.map(function(item, index){ //item = cada item do vetor, index = posição de cada item
    return (item*2+index);
});
console.log(newArr);

//reduce = a partir de uma função, reduz um array em um unico dado, geralmente um número
const sum = arr.reduce(function(total, next){
    return total+next; // next eh os proximos elementos do vetor, total é a soma deles, e sempre eé passado como total
}); //[1]total = 0, next = 1 / [2] total = 1, next = 3/ [3]total = 4, next = 4 / ...
console.log(newArr);

//filter = filtra os elementos de um array a partir de uma função
const par = arr.filter(function(item){ 
    return item%2 === 0; //a expreção tem q retornar um true ou um false (false eh excluido)
});  
console.log(par);

//finde = retorna o valor se for encontrado dentro do array
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);