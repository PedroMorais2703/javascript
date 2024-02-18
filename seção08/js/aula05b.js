function removerBotao(btn){
    //recupera o elemento div
    let divElement = document.querySelector('#app');

    //remove o filho selecionado da div
    divElement.removeChild(btn);

    // ou podemos colocar os dois em uma linha

    document.querySelector('#app').removeChild(btn);
}