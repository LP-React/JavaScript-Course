import { searchCharacter, searchCharacterAsync } from "./promesas";

const charactersId = [
    'Adolf',
    'Laysson',
    'Iron'
];
const charactersPromises = charactersId.map(id => searchCharacter(id))

export const getCharactersArr = async () => {
    return await Promise.all(charactersId.map(searchCharacter));
}

export const getCharacterAwait = async (id) => {
    try {
        const character = await searchCharacterAsync(id);
        return character;
    } catch (err) {
        console.log('Catch!!');
        return {
            name: 'no name',
            power: 'no power'
        }
    }
}

export const charactersCicle = async () => {
    console.time('Ciclo');

    for await(const character of charactersPromises) {
        console.log(character)
    }

    console.timeEnd('Ciclo')
}

export const characterIfAwait = async(id) => {
    if ((await searchCharacterAsync(id)).name === 'Laysson Polo') {
        console.log('Good Job')
    } else {
        console.log('Naaa')
    }
}