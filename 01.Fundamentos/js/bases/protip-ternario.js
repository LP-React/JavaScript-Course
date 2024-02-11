const eLMayor = (a, b) => (a > b) ? a : b;
console.log(eLMayor(23, 10));

const tieneMenbresia = (miembro) => (miembro) ? '2 usd' : '10 usd';
console.log(tieneMenbresia(false));

let esAmigo = false;
let listaAmigos = [
    'Jorge',
    'Luis',
    esAmigo ? 'Jose es amigo' : 'Jose no es amigo'
]
console.log(listaAmigos);

const nota = 94;
const grado =
    nota >= 95 ? 'A+' :
        nota >= 90 ? 'A' :
            nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                    nota >= 75 ? 'C+' :
                        nota >= 70 ? 'C' : 'F';
console.log({ nota, grado })
