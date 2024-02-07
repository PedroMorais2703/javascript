const curso = {
    nome: 'Programação em Javascript',
    horas: 25,
    preco: 27.99
}

console.log(curso);

console.log(typeof(curso));

console.log(Object.keys(curso)); // consede apenas as chaves

console.log(Object.values(curso)); // consede apenas os valores

console.log(Object.entries(curso)); // tranforma em arrays

Object.entries(curso).forEach(par => {  // organiza a array
    console.log(`${par[0]}: ${par[1]}`)
})

Object.entries(curso).forEach(([chave, valor]) => { // outra maneira de organizar arrays
    console.log(`${chave}: ${valor}`)
});

curso.nome = 'Criação de APIs Rest com Django Rest Framework';

console.log(curso);

Object.defineProperty(curso, 'publicacao' , {
    enumerable: true,  // define se o valor pode ser visto ou não
    writable: false,  // define se o valor pode ser mudado ou não
    value: '02/02/2024' // define o valor
});

curso.publicacao = '01/01/2019' // com o definição em false não podemos auterar

console.log(curso);

console.log(curso.publicacao); // caso o writable esteja em true é uma das maneiras de ver o valor

const outro = {}

Object.defineProperties(outro, '', { // trabalhando com objeto vazio

});

Object.freeze(curso); // faz com que nada possa ser alterado 

curso.nome = 'Dança da garrafa';

console.log (curso);

const usuario = [  // array com objetos
    {nome: 'Aline Moraes', empresa:'Geek University'},
    {nome: 'Pedro Henrique', empresa:'Google'},
    {nome: 'Felipe Xavier', empresa:'Sony'},
]

console.log(usuario);
console.table(usuario); // organiza os dados em tabela

