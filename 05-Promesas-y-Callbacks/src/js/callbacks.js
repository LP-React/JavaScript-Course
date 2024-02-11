const characters = {
    Adolf : {
        name : 'Adolf Reinhard',
        poder: 'Electricidad'
    },
    Laysson : {
        name : 'Laysson Polo',
        poder: 'Estudiar xd'
    },
    Iron : {
        name : 'tony Stark',
        poder: 'Ser rico'
    },
};

export const searchCharacter = (id, Callback) => {

    const character = characters[id];

    if (character) {
        Callback(null, character );
    } else {
        Callback(`No existe un personaje con el id ${id}`);
    }

};
