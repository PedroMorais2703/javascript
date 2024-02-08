class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        return this._descricao = descricao
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        return this._salario = salario
    }
}

class Pessoa{  // usar a class Pessoa como base para funcionario e cliente
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
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

    get email(){
        return this._email;
    }

    set email(email){
        return this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        return this._cpf = cpf;
    }

    // metodo extra

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        // transforma a string em um array onde cada elemento do array será as partes da string separadas por esço
        nome_completo = nome_completo.split(' ');
        // remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();
        // junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf); // super class ou class mãe

        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        return this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        return this._registro = registro;
    }

    // Sobrescrita de metodo
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} \nSalario: ${this.funcao.salario}`);
    }
}


class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        return this._renda = renda;
    }
}

const prog = new Funcao('programador', 5987.99);
const f1 = new Funcionario('Pedro', 'Morais', 'pedro@gmail.com', '123.456.789-00', prog, 'f78944');

const c1 = new Cliente('Paula', 'Fernandes', 'paula@gmail.com', '123.456.789', 45123.98);

f1.imprimir_dados();
c1.imprimir_dados();