var valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;
});
console.log(dobro);

// encadeamento maps para realizar multiplas transformações

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobro).map(soma_4).map(dividir_por_5);
console.log(resultado);