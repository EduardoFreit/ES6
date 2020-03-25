/*estabelece valores padrão quando 
o parametro nao for pssado na chamada da função*/
function soma (a = 3, b = 6){ 
    return a + b;
}

const subt = (a = 3, b = 6) => a - b;

console.log(soma(1,2));// a = 1 / b = 2
console.log(soma(1));//a = 1 / b = 6
console.log(soma());//a = 3 / b = 6

console.log(subt(3,1));
console.log(subt(4));
console.log(subt());
