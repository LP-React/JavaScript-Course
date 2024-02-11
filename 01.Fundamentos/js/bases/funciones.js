//Funcion tradicional

function saludar(nombre) {
    console.log('Hola ' + nombre);
    console.log(arguments)
}

const saludar2 = function (nombre) {
    console.log('Hola amigo ' + nombre);
}

saludar('Fernando', 234, 'Hola');
saludar2('Laysson');

//Funciones de flecha

let saludarFlecha = () => {
    console.log('Esto es una funcion de flecha')
}

let saludarFlecha2 = nombre => {
    console.log('Hola de nuevo amigo ' + nombre)
}

saludarFlecha();
saludarFlecha2('Dylan');

//Return

function funcionReturn() {
    return 1, 2, 1;
}
console.log(funcionReturn);

function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 5))

let sumar2 = (a, b) => a + b;
console.log(sumar2(5, 8))

function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());