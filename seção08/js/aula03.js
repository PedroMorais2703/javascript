function mostrarAlerta(){
    alert('O botão foi clicado');
}

function mudarTexto(elemento){
    elemento.innerHTML ='Eu estou avisando...';

}

function mudarCor() {
    let cores = ['green', 'yellow', 'red', 'magenta', 'blue','black','orange']

    const numero = math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];
}

function escreverTexto() {
    let span = document.getElementById('texto');

    span.innerHTML = input.value
}