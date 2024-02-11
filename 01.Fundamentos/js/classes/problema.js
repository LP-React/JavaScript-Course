const lay = {
    nombre : 'Laysson',
    edad : 19,
    imprimir() {
        console.log(`Nombre : ${this.nombre} - edad : ${this.edad}`)
    }
}

const pedro = {
    nombre : 'Pedro',
    edad : 12
}

lay.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre : ${this.nombre} - edad : ${this.edad}`)
    }
}

const maria = new Persona('María', 18);
console.log(maria);
maria.imprimir();