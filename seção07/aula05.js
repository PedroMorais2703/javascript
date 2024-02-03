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
        console.log(`${this.nome} está falnado ${msg}`);
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

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
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

}