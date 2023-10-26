// declarando array

//forma1
var alunos = new Array('a', 'b', 'c', 'd');
console.log(alunos);

//forma2 recomendada
var notas = [1, 2, 3, 4];
console.log(notas);

//fazendo acesso ao valor de um indice
console.log(notas[2])

//alterando o valor a partir do indice
notas[2] = 12;
console.log(notas);

//inserindo elementos no final do array
var nomes = ['paula', 'maria', 'pedro'];
console.log(nomes);

nomes.push('vanessa');
console.log(nomes);

//tamanho do array (quantidade de elementos)
console.log(nomes.length);

//ordenando os dados de um array
var alunos2 = ['vanessa', 'maria', 'pedro', 'beatriz']
console.log(alunos2);
alunos2.sort();// ordenando array de string
console.log(alunos2);