let itexto = document.getElementById('produto');

console.log(itexto);

let spans = document.getElementsByTagName('span');

console.log(spans);

//let eles = document.getElementsByClassName('text');

console.log(eles);

// ler valores
console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

// alterar valores
spans[0].textContent = 'Javascript';
spans[1].innerHTML = 'Geek University';

let span = document.getElementsByTagName('span')[0];

console.log(span.innerHTML);

span.style.textTransform = 'uppercase';

//let inp = document.querySelectorAll('input'); // buscar todos elementos pela tag

let eles = document.querySelectorAll('.texto'); // buscar todos elementos pela classe

let div1 = document.querySelector('#div1'); //busca elemento pelo ID

let imp = document.querySelector('input[name=preco]');

console.log(imp);

// Exemplo 1

let btn = document.querySelector('button.btn');

btn.onclick = function() {
    alert('Botão clicando...');
}

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function() {
    alert(`Temos o texto: ${inp.value}`);
}