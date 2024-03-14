// Iterando com for of

let nome = 'pedro henrique';

for (let letra of nome){
    console.log(letra);
}

let numeros = [1,2,3,4,5,6,7,8];

for (numero of numeros){
    console.log(numero * 2);
}

// pegando o indice
for (let indice in numeros){
    console.log(`Indice: ${indice}, Valor: ${numeros[indice]}`);
}


let cursos = new Map([
    [1,'programação'],
    [2,'algoritmos'],
    [3,'programação em python']
    
]);

for(let curso of cursos){
    console.log(curso);
}

//somente as chaves
for(let chave of cursos.keys()) {
    console.log(chave);
}

//somente os valsores
for(let valor of cursos.values()) {
    console.log(valor);
}

// chave e valor
for(let [chave, valor] of cursos.values()) {
    console.log(`${chave} - ${valor}`);
}

let conjunto = new Set([1, 2, 3, 4, 5, 6, 7, 7]);

for(numero of conjunto){
    console.log(numero);
}