//OBJECT SHORT SINTAX

const nome = 'Luiz';
const idade = 19;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'VASP'
};
console.log(usuario);
//é iagual a
const usuario1 = {//quando o nome da variavel é igual ao nome do atributo, não precisa fazer a sintaxe acima
    nome,
    idade,
    empresa: 'V1ASP'
};
console.log(usuario1);