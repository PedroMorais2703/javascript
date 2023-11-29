function calcular_idade(ano_nascimento) {
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade
}

let ret = calcular_idade(2002);
console.log(ret);