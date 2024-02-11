let a = 10;
let b = a;
a = 30;
console.log({ a, b });

//Operador spread
let juan = { nombre: 'Juan' }
let ana = { ...juan };
ana.nombre = 'Ana'
console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log({ peter, tony });

//Arrays con spread y .slice
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('Spread')
const frutasSpread = [...frutas];
console.timeEnd('Spread')

console.time('Slice')
const frutasSlice = frutas.slice();
console.timeEnd('Slice')

frutasSpread.push('Mandarina');
frutasSlice.pop();

console.table({
    frutas, frutasSpread, frutasSlice
})
