class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        return this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(msg){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }
}

class Carro {
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        return this._modelo = modelo;
    }
     
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }

}

// Instaciação de objetos - Forma1

const curso = new Object();
curso.nome = 'Programação em JavaScript';
curso.preco = 27.99;

console.log(curso);

curso['qtd_alunos'] = 999;

console.log(curso);

delete curso['qtd_alunos'];

console.log(curso);


// Instaciação de objetos - Forma 2 - objeto literal

const programa = {
    nome: 'photoshop',
    preco: 89.99,
    fabricante: {
        nome: 'adobe',
        contato:'contact@adobe.com',
        endereco: {
            rua: 'da paz, 45',
            bairro: 'Nova lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'São Paulo'},
            {cidade: 'Recife'},
        ]
            
    }
}

console.log(programa);

console.log(programa.nome);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filiais.length);


// Instanciação de objetos - Forma 3 - objeto literal

const pessoa = {};

console.log(typeof(pessoa));

pessoa.nome = 'angelina';

console.log(pessoa);

// Instanciação de objetos - Forma 4 - função construtora

function Lampada(cor){
    this.cor = cor;
}

const l1 = new Lampada('branca');
console.log(l1);
console.log(typeof(l1));

// Instanciação de objetos - Forma 5 - objeto a partir das nossas classes

const p1 = new Pessoa('Felicia', 'sobrenome');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome);
console.log(p1.sobrenome);

p1.nome = 'xuxa';
console.log(p1);

p1.falar('só para baixinhos');
p1.comer();
p1.beber();

