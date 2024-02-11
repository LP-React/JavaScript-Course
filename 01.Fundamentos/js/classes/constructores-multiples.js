class Persona {
    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre,apellido,pais);
    }

    constructor(nombre,apellido,pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1   = 'Laysson',
      apellido1 = 'Polo',
      pais1      = 'Honduras';

const Persona1 = new Persona(nombre1,apellido1,pais1);

Persona1.getInfo();

const fher = {
    nombre  : 'Fernando',
    apellido: 'Herrera',
    pais    : 'Costa Rica'
}

const Persona2 = Persona.porObjeto(fher);
Persona2.getInfo();