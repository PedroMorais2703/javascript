var numeros = [1, 2, 3, 4, 5, 6, 7, 8]

function filtar_pares(n){
    return n % 2 === 0;
}

console.log(filtar_pares(3));


function filtar_impares(n){
    return n % 2 !== 0;
}

function filtar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtar_pares);
console.log(ret);

var ret = numeros.filter(filtar_impares);
console.log(ret);

var ret = numeros.filter(filtar_multiplos_5);
console.log(ret);

var alunos = [
    {nome: 'pedro', nota: 8.5},
    {nome: 'maria', nota: 10},
    {nome: 'fernanda', nota: 9.2},
    {nome: 'ricardo', nota: 7.2}
]
console.log(alunos);

function filtar_notas_maiores_que_8(alunos){
    return alunos.nota > 8;
}

var filtrados = alunos.filter(filtar_notas_maiores_que_8);
console.log(filtrados);