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

var idades = [1, 5, 9, 11, 50, 2, 7];
idades.sort(function(a,b){return a - b});
console.log(idades); 

 idades.splice(3, 1); // a partir do indice 3 delete um elemento
 console.log(idades);

 idades.splice(3,0, 56, 89)
 console.log(idades);

 // iterando em uma array
for (var i = 0; i < idades.length; i++){
    console.log(idades[i]);
}

// removendo o primeiro item do array
idades.shift(); // assim como .pop(que remove e rotorna o ultimo item) esse tbm remove e retorna o primeiro item
console.log(idades);
var ret = idades.shift();
console.log(ret);

// inserindo elementos no inicio de uma array
idades.unshift(99);
console.log(idades)

// retornar uma array a partir do indice informado
var novo = idades.slice(3);
console.log(novo);

//a partir do indice 1, pegue até o indice 2 sem inclui-lo
var novo2 = idades.slice(1, 3);
console.log(novo2);

// concatenando(juntando) dois arrays
var pares = [2, 4, 6, 8, 10]
var impares = [1, 3, 5, 7, 9]

var rest = pares.concat(impares);
console.log(rest);

rest.sort(function(a, b) {return a - b});
console.log(rest);

// array bidimencional (array dentro de array)
var tabuleiro = [[1, 2, 3, 4],[5, 6, 7 ,8],[9, 10, 11, 12],[13, 14, 15, 16]]
console.log(tabuleiro)
console.log(tabuleiro[0] [0]); // linha 0 coluna 0
console.log(tabuleiro[1] [2]);// linha 1 coluna 2