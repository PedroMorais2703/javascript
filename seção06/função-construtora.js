// Crinado uma função construtora

function Pessoa(n, s, raca = 'humano'){
    // Atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // Atributos públicos pode ser acessados fora da função construtora
    this.raca = raca;

    // Método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }    
}

// Instacianado um objeto
const angelina = new Pessoa('angelina', 'feminino');

console.log(angelina)

console.log(angelina.peso); //privado
console.log(angelina.raca); //publico

angelina.fazer_aniversario(); //publico
angelina.fazer_aniversario(); //privado

// Instanciar um novo objeto
const felicity = new Pessoa(' felicity', 'Feminino');

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)); //function
console.log(typeof(felicity)); //object