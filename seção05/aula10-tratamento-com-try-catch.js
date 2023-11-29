// Tratamentos de erros com try/catch
try{
    console.log(nome);
}catch(e){
    console.log("não foi possivel imprimir nome")
    console.log(e.name)
    console.log(e.menssage)
}

//lançando erros
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Oavalores devem ser positivos."); //lançando uma exeção (erros)
    }else{
        return num1/num2;
    }
}

try{
    let ret = dividir(0, 2)
    console.log(ret);
}catch(e){
    console.log('não foi possivel dividir.');
}finally{  //sempre funciona indempendete de erros
    console.log('vamos continuar...')
}