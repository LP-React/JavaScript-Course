const regresaTrue = () => {
    console.log('Regresa True')
    return true;
}
const regresaFalse = () => {
    console.log('Regresa False')
    return false;
}

console.warn('Not');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true
console.log(!regresaFalse()); //true

console.warn('And');
console.log(true && true); //true
console.log(true && false); //false
console.log(regresaFalse() && regresaTrue()); //ejecuta solo el false, retorna FALSE
console.log(regresaTrue() && regresaFalse()); //valida la primera y segunda funcion - retorna FALSE

console.warn('Or');
console.log(true || true); //true
console.log(false || false); //true
console.log(regresaFalse() || regresaTrue()); //valida la primera y segunda funcion - retorna TRUE

