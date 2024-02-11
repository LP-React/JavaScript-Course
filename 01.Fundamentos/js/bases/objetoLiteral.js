const personaje = {
    nombre: 'Laysson',
    email: 'ljamirp30',
    vivo: true,
    edad: 19,
    //Objeto anidado
    coords: {
        lat: 32,
        lng: -23
    },
    //Array en objeto
    languages: ['Java', 'MySql', 'Azure'],
    nombreCompleto: [
        'Laysson', 'Polo', 'De la Cruz'
    ],
    datoParaBorrar: true,
};
console.log('Nombre : ', personaje['nombre']);
console.log('Coordenadas', personaje.coords.lat);
console.log('Nombre completo', personaje.nombreCompleto);
console.log('Lenguajes totales', personaje.languages.length);
console.log('Lenguajes totales', personaje.languages[personaje.languages.length - 1]);

const x = 'vivo';
console.log('Esta vivo? : ', personaje[x]);

console.log(personaje);
delete personaje.datoParaBorrar;
console.log(personaje);

//Congela las propiedades del objeto
//PERO si se puede editar las propiedades de objetos internos
Object.freeze(personaje);

personaje.languages[0] = 'JavaEditado';

personaje.casado = false;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades)
console.log(valores)
