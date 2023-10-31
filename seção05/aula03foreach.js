var nomes = ['paula', 'maria', 'pedro', 'beatriz'];
 
// definir uma função
function imprimir(nomes, indice, array) {
    console.log(indice + '-' + nomes);
}

//para cada (traducao)
nomes.forEach(imprimir);

// ultilização de uma função anonima (lambida/callback) e tamplete string
nomes.forEach(function(nomes, indice){
    console.log(`${indice} - ${nomes}`)
});