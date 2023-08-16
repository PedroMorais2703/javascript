var curso = 'javascript';
var legal = false;

if (curso === 'javascript' && legal === true) {
    console.log('O curso de javascritpt é legal');
}else{
    console.log('O curso não é de javascript ou não é legal.');
}

if (curso === 'javascript' || legal === true) {
    console.log('O curso de javascritpt é legal');
}else{ 
    console.log('O curso não é de javascript ou não é legal');
}

if (curso != 'javascript') {
    console.log('O curso não é de javascript');
}else {
    console.log('O curso é de javascript');
}