// Crinado uma função construtora

function pessoa(n, s){
    // Atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // Atributos públicos pode ser acessados fora da função construtora
    this.raca = 'Humano';

    // Método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }    
}