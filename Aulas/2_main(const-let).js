const a = 1; //não pode ter seu valor reatribuido
//a = 3; da erro 
/*
const usuario = {nome: 'Dudu'};
usuario.nome = 'Luiz'; // eh permitido, ppois há uma mutação, pois o formato do objeto nao muda, só há alteraçoes no conteudo
console.log(usuario); 
*/

//variaveis de escopo
function teste (a){
    let b = 4; //let so pode ser mudada se ela estiver dentro do escopo '{}'
    if (a > b){
        b = 7;
        console.log(b);        
    }
    console.log(b);
}

teste(10);
