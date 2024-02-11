import './style.css';
import { searchCharacter as searchCharacterCallback} from './js/callbacks';
import { searchCharacter } from './js/promesas';

const characterId1 = 'Adolf';
const characterId2 = 'Laysson';

// searchCharacter(characterId1).then(character1 => {
//     // console.log(`Enviando a ${character1.name} a la mision`);
//     searchCharacter(characterId2).then ( character2 => {
//     console.log(`Enviando a ${character1.name} y ${character2.name} a la mision`);
//     });
// });

Promise.all([searchCharacter(characterId1), searchCharacter(characterId2)]).then( ([character1, character2])  => {
    console.log(`Enviando a ${character1.name} y ${character2.name} a la mision`);
}).catch(err => {
    alert(err);
}).finally(() => {
    console.log('se termino la promesa')
})

console.log('Fin del programa')

// searchCharacter(characterId1, (err, character1) => {

//     if (err) { return console.error(err);}

//     searchCharacter(characterId2, (err, character2) => {
//         if (err) {return console.error(err);}
//         console.log(`Enviando a ${character1.name} y ${character2.name} a la mision`)
//     })
// });
