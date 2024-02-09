class Carro {
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
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

    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`);    
    }

    static retornar_marca(){
        return 'Honda';
    }

}

const fit = new Carro('Fit'); //metodo de instancia

fit.imprimir_dados();

console.log(Carro.retornar_marca()); // forma estatica