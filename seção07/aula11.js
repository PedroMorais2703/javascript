//criando objeto atraves de uma factory function
const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('Pedro', 'Morais');
console.log(p1);
console.log(typeof p1);
p1.andar();

// criando objeto atraves de uma função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`)
    }
}

const p2 = new Pessoa2('Pedro', 'Morais');
console.log(p2);
console.log(typeof p2);
p1.andar();

//criando objeto atraves de uma classe
class Pessoa3{
    construtor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar() {
        console.log(`${this.nome} ${this.sobrenome} está andando...`)
    }
}

const p3 = new Pessoa3('Pedro', 'Morais');
console.log(p3);
console.log(typeof p3);
p3.andar();