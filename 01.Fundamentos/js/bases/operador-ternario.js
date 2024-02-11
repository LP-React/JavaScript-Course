const dia = 5;
const horaActual = 9;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana')
//     horaApertura = 9;
// } else {
//     console.log(`Dia de semana`)
//     horaApertura = 11;
// }

horaApertura = ([0, 20].includes(dia)) ? 9 : 11;

// if ( horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });

