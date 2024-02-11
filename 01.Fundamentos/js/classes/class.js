class Persona {

    static conteo = 0;
    static get getConteo () {
        return Persona.conteo + ' instancias'
    }
    static mensaje() {
        console.log(this.nombre);
        console.log('HOla')
    }

    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre  = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona.conteo++;
    }

    set setComidaFav(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFav() {

        return this.comida;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi codigo es ${this.codigo}`);
    }
    
    miFrase() {
        console.log(`${this.nombre} dice :  ${this.frase}`);
    }
}

const laysson = new Persona('Laysson', '24412' , 'Hola');
const Pedro = new Persona('Laysson', '24412' , 'Hola');

laysson.quienSoy();
laysson.miFrase();

laysson.setComidaFav = 'Maracuyá';
console.log(laysson);
laysson.getComidaFav;
console.log(Persona.getConteo)
Persona.mensaje();

Persona.propiedadExterna = 'Propiedad';
console.log(Persona.propiedadExterna)
console.log(Persona)