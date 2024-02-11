import './style.css';

import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';
import {searchCharacter, searchCharacterAsync} from './js/promesas';
import { getCharactersArr, getCharacterAwait, charactersCicle, characterIfAwait } from './js/await';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then (mensaje => {
//     console.log(mensaje)
// }).catch(console.error)

// searchCharacter('Adolf').then(console.log).catch(console.warn);
// searchCharacterAsync('Laysson').then(console.log).catch(console.warm);

// console.time('await')

// getCharacterAwait('Laysson2').then(character => {
//     console.log(character);
//     console.timeEnd('await');
// });

charactersCicle();
characterIfAwait('Laysson')


