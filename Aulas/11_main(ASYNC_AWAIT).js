const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});//Criando uma promisse do jeito antigo
/*minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        
    });*/

/*async function executaPromisse() {// mesma coisa da de
    console.log(await minhaPromise());
        console.log('1');//só executa esse console log, quando a await for executada;
    console.log(await minhaPromise());
        console.log('2');
    console.log(await minhaPromise());
}*/

const executaPromisse = async () =>{
    console.log(await minhaPromise());
        console.log('1');//só executa esse console log, quando a await for executada;
    console.log(await minhaPromise());
        console.log('2');
    console.log(await minhaPromise());
}
executaPromisse();

/*minhaPromise().then(response => { // mesmo codigo do de cima bem mais verboso
    console.log(response);
    console.log('1');

    minhaPromise().then(response =>{
        console.log(response);
        console.log('2');
        
        minhaPromise().then(response => {
            console.log(response);
            console.log('3');
        })
    })
});*/