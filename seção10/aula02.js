// Rest/Spread (Juntar/Espalhar) -> ...

function total(...precos){
    let total = 0

    precos.forEach(p => total += p);

    return total;
}

console.log(total(23.44, 22, 3.45).toFixed(2));

let frutas1 = ['manga', 'uva', 'melancia']
let frutas2 = ['abacate', 'morango', 'banana']

let compras = [...frutas1, ...frutas2];

console.log(compras)

let alunos = ['pedro', 'felipe','marcia' ]
let novo = 'joana'

//alunos.push(novo);
let todos = [...alunos, novo];
console.log(todos)