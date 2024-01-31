// Função fabrica - Function factory = fabrica objetos

function fabrica_cursos(n, p) {
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto). toFixed(2)
    }
}

console.log(fabrica_cursos('PRogramação em JavaScript', 27,99));
console.log(fabrica_cursos('Criação de APIs com Django Rest Framework', 35,99));

cursos = []

for (var i = 0; i < 5; i++) {
    cursos.push(fabrica_cursos(`curso ${i + 1}`, `${19,99 + i * 3}`));
}

console.log(cursos);