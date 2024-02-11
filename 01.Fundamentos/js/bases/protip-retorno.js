//Funcion que retorna un objeto {}
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
const persona = crearPersona('Laysson', 'Polo');
console.log(persona)

//Funcion de flecha que retorna un objeto
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
const persona2 = crearPersona2('Juan', 'Jose')
console.log(persona2)

//Funcion que imprime los arguments
function imprimeArgumentos() {
    console.log(arguments)
}
imprimeArgumentos(10, false, true, 'Hello', 'New args')

//Funcion de flecha no puede imprimir args como las funciones tradicionales
//Parametro REST ...args retorna todos los parametros pasados
const imprimeArgumentos2 = (...args) => {
    return args;
}
let argumentos2 = imprimeArgumentos2(true, 10, false, 2.4, true);
console.log({ argumentos2 })

//Da valores a las variables del array.
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(false, false, 'Laysson', 'Hola Laysson');
console.log({ casado, vivo, nombre, saludo })

//Desestructuración de objetos
const personaje = {
    nombre: 'Laysson',
    email: 'ljamirp30',
    vivo: true,
    edad: 19,
    languages: ['Java', 'MySql', 'Azure', 'PostgreSQL'],
};

const imprimePropiedades = ({ nombre, email, vivo, edad, languages }) => {
    console.log({ nombre });
    console.log({ email });
    console.log({ vivo });
    console.log({ edad });
    console.log({ languages });
}

imprimePropiedades(personaje);
