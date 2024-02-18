let btn = document.querySelector('button')

btn.onclick = function(){
    //Declara a variavel de texo que será adiocionado ao paragrafo
    let textElement = '';

    //recupera o valor do input
    let inputValue = document.querySelector('input').value;

    //cria um elemento paragrafo
    let pElement = document.createElement('p');

    // adiciona o atributo class ao paragrafo
    pElement.setAttribute('class', 'class-p');

    //verifica se o usuario preencheu o input, caso contrario coloca um textop padrao
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio...')

    }

    //adiciona o texto como filho do paragrafo
    pElement.appendChild(textElement);

    //Recura a div
    let divElement = document.querySelector('#app');

    //Adiocina o paragrafo como filho da div
    divElement.appendChild(pElement);

    //Limpa o input
    document.querySelector('input').value = '';
    
}