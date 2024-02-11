const characters = {
    Adolf: {
        name: 'Adolf Reinhard',
        poder: 'Electricidad'
    },
    Laysson: {
        name: 'Laysson Polo',
        poder: 'Estudiar xd'
    },
    Iron: {
        name: 'tony Stark',
        poder: 'Ser rico'
    },
};

export const searchCharacter = (id) => {
    const character = characters[id];

    return new Promise((resolve, reject) => {

        if (character) {
            setTimeout(() => {resolve(character)},1000)
        } else {
            reject(`No existe personaje con el id ${id}`)
        }

    });
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000)
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500)
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000)
});

//Funcion Asincrona
export const searchCharacterAsync = async (id) => {
    const character = characters[id];
    if (character) {
        return character;
    } else {
        throw Error(`No existe un heroe con el id ${id}`);
    };
};

export {
    promesaLenta, promesaMedia, promesaRapida
}