//  Json - JavaScript object Notation

const curso = {
    nome: 'Progrmação em JavaScript',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

console.log(curso); // Objeto javaScript
console.log(curso.preco());
console.log(typeof(curso));

//Convertendo o objeto JavaScript para JSON
const json = JSON.stringify(curso);
console.log(json); // JSON
console.log(typeof(json));

// Convertendo de JSON para objeto JavaScript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));