// 1) temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) temos que referenciar a lista
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar GTA V',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver um filme',
    'Ler um livro'
];

function renderizarTarefas(){

    //Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //criar o item da lista
        let itemLista = document.createElement('li');

        //adicionar classe no item da lista
        itemLista.setAttribute( 'class','list-grup-item list-grup-item-action');

        //criar um texto
        let itemTexto = document.createTextNode(tarerfa);

        // adicionar o texto no item da lista
        itemLista.appendChild( itemTexto );

        // adicionar o item da lista na lista
        lista.appendChild( itemLista );
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

//1) Precisamos "escutar" o evento de clique no botão
btn.onclick = function(){
    
    //2) Precisamos capturar ovalor digitado pelo usuario no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        //3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);
        
        // Executar a função para renderizar as tarefas
        renderizarTarefas();

        //Limpando o input
        input.value = '';

        //remover spans
        removerSpans();
    }else{
        //remover spans
        removerSpans();

        let card = codument.querySelector('.card');

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }
   
}

function removerSpans(){
    let spans = document.querySelectorAll('spans');

    let card = document.querySelector('.card');

    for(let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i]);
    }
}