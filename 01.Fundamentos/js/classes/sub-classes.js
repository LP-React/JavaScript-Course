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

class Heroe extends Persona {
    clan = 'sin clan';
    constructor (nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'lp-react';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi clan es ${this.clan}`);
        super.quienSoy();
    }
}

const laysson = new Heroe('Laysson', '24412' , 'Hola');
laysson.setComidaFav= 'Ceviche';
laysson.miFrase();
laysson.quienSoy();
console.log(laysson);