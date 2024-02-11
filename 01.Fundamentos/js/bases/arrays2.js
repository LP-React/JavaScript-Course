let juegos = ['Zelda', 'Metroid', 'Pokemon', 'Cod'];
console.log('El largo del array es: ' + juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log('Primer juego es: ' + primero + '\n' + 'Ultimo juego es: ' + ultimo);

//Foreach para imprimir Arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr })
});

//Agregar item al final del array
let nuevaLongitud = juegos.push('Metroidvania');
console.log({ nuevaLongitud, juegos });

//Agrega item al principio del array
nuevaLongitud = juegos.unshift('Undertale');
console.log({ nuevaLongitud, juegos })

//Borra ultimo item
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos })

//Borra items a partir del primer indice indicado
let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

//Busca item String -> Array
let MetroidIndex = juegos.indexOf('Pokemon')
console.log(MetroidIndex)