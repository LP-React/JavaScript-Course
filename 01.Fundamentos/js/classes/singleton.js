class Singleton {
    static instancia; //undefined
    nombre = '';

    constructor (nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;


    }
};

const instancia1 = new Singleton('Laysson');
const instancia2 = new Singleton('Jamir');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(Singleton.instancia)
