// Parametro variavel

function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];

    }
    return soma;
}

console.log(somar());
console.log(somar(3, 5, 7, 20));


function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprime_valores()
imprime_valores(4,6)

// Valor padrão

function somar1(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar1(45,2,6))
console.log(somar1())