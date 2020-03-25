//importando a função soma, como é default nao fica entre as aspas e da para mudar o nome, ja que ela eh unica
/*import somaFunc, {sub as subtracao} from './funcoes';//função sub nao eh dafault e fica entre as aspas e pode mudar o nome pelo operados 'as'
console.log(somaFunc(3, 4));
console.log(subtracao(4,3));*/

import * as funcoes from './funcoes'; //iportando todas as funções e colocando-as em um objeto de funções chamaddo 'funcoes'
console.log(funcoes);
console.log(funcoes.soma(1,2));
console.log(funcoes.sub(1,2));
console.log(funcoes.mult(1,2));
/*
export const idade = 23; // da pra exportar tudo!, teste

export default class Usuario {  // só pode um defaul
    static info() {
        console.log('Apenas teste');
    }
}

export default function soma(a, b) {
    return a + b;
}*/